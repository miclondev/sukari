import { IProfile } from "@/config/types";
import useClient from "@/hooks/use-client";
import useHandleError from "@/hooks/use-handle-error";
import { UpdateProfileInput } from "@/types/API";
import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  AuthSession,
  AuthUser,
  fetchAuthSession,
  fetchUserAttributes,
  FetchUserAttributesOutput,
  getCurrentUser,
} from "aws-amplify/auth";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";
import createCtx from "./create-ctx";

type IProfileProvider = {
  userProfile: IProfile | null;
  currentUser: AuthUser | null;
  userAttributes: FetchUserAttributesOutput | null;
  userId: string | undefined;
  loadingUser: boolean;
  refetchUser: () => void;
  updateUserProfile: UseMutationResult<IProfile | null, Error, UpdateProfileInput, unknown>;
  authSession: AuthSession | null;
};

export const [useProfile, ProfileContextProvider] = createCtx<IProfileProvider>();

export const ProfileProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [userAttributes, setUserAttributes] = useState<FetchUserAttributesOutput | null>(null);
  const [authSession, setAuthSession] = useState<AuthSession | null>(null);
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();
  const { Profile } = useClient();
  const queryClient = useQueryClient();
  const { handleErrors } = useHandleError();

  const queryKeys = {
    userProfile: ["userProfile", userId],
  };

  const {
    data: userProfile,
    isLoading,
    isFetched,
    refetch,
  } = useQuery({
    queryKey: queryKeys.userProfile,
    queryFn: async () => {
      if (!currentUser?.userId) return null;
      const response = await Profile.get({ id: currentUser?.userId });
      let userProfile = response.data as IProfile;

      if (!userProfile?.id) {
        const createResponse = await Profile.create({
          id: currentUser.userId,
          accountType: "user",
          cognitoUsername: currentUser?.username,
          email: userAttributes?.email || "",
        });
        const errors = handleErrors(createResponse);
        console.log({ errors });
        userProfile = createResponse.data as IProfile;
      }

      if (!userProfile?.id) return null;

      return userProfile as IProfile;
    },
    enabled: !!currentUser?.userId,
  });

  const updateUserProfile = useMutation({
    mutationFn: async (input: UpdateProfileInput) => {
      const { data } = await Profile.update(input);
      return data;
    },
    onMutate: async (input) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.userProfile });
      const previousValue = queryClient.getQueryData(queryKeys.userProfile);
      queryClient.setQueryData(queryKeys.userProfile, (old: any) => {
        return {
          ...old,
          ...input,
        };
      });
      return { previousValue };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(queryKeys.userProfile, context?.previousValue);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.userProfile });
    },
  });

  useEffect(() => {
    const fn = async () => {
      try {
        const user = await getCurrentUser();
        const _attributes = await fetchUserAttributes();
        const session = await fetchAuthSession();
        setAuthSession(session);
        setUserAttributes(_attributes);
        setCurrentUser(user);
        const _userId = `${user.userId}::${user.username}`;
        setUserId(_userId);
      } catch (e) {
        console.log("failed to get user", { e });
      }
    };
    if (!currentUser && !pathname?.includes("auth")) {
      fn();
    }
  }, [pathname, currentUser, router]);

  const values: IProfileProvider = {
    userProfile: userProfile || null,
    currentUser,
    userId,
    loadingUser: isLoading,
    refetchUser: refetch,
    updateUserProfile,
    userAttributes,
    authSession,
  };

  return <ProfileContextProvider value={values}>{children}</ProfileContextProvider>;
};
