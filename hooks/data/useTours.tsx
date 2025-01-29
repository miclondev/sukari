import { CreateTourInput, UpdateTourInput } from "@/types/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useClient from "../use-client";

// Types
export type TourStatus = "ACTIVE" | "INACTIVE";

// Query Keys
export const tourKeys = {
  all: ["tours"] as const,
  lists: () => [...tourKeys.all, "list"] as const,
  list: (filters: any) => [...tourKeys.lists(), { ...filters }] as const,
  details: () => [...tourKeys.all, "detail"] as const,
  detail: (id: string) => [...tourKeys.details(), id] as const,
};

// Hooks
export const useTours = (filters?: any) => {
  const { Tour } = useClient();
  return useQuery({
    queryKey: tourKeys.list(filters),
    queryFn: async () => {
      const { data, errors } = await Tour.list(filters);
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
  });
};

export const useOrgTours = (orgId: string) => {
  const { Tour } = useClient();
  return useQuery({
    queryKey: tourKeys.list({ orgId }),
    queryFn: async () => {
      const { data, errors } = await Tour.tourByOrg(
        { orgId },
        {
          sortDirection: "DESC",
        }
      );
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
  });
};

export const useTourByStatus = (status: string, limit = 50) => {
  const { Tour } = useClient();
  return useQuery({
    queryKey: tourKeys.list({ status }),
    queryFn: async () => {
      const { data, errors } = await Tour.tourByStatus(
        { status },
        {
          sortDirection: "DESC",
          limit,
          authMode: "identityPool",
        }
      );
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
  });
};

export const useTour = (id: string) => {
  const { Tour } = useClient();
  return useQuery({
    queryKey: tourKeys.detail(id),
    queryFn: async () => {
      const { data, errors } = await Tour.get(
        { id },
        {
          authMode: "identityPool",
        }
      );
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
    enabled: !!id,
  });
};

export const useCreateTour = () => {
  const queryClient = useQueryClient();
  const { Tour } = useClient();
  return useMutation({
    mutationFn: async (input: CreateTourInput) => {
      const { data, errors } = await Tour.create(input);
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tourKeys.lists() });
    },
  });
};

export const useUpdateTour = () => {
  const queryClient = useQueryClient();
  const { Tour } = useClient();
  return useMutation({
    mutationFn: async (input: UpdateTourInput) => {
      console.log({ input });
      const { data, errors } = await Tour.update(input as any);
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: tourKeys.detail(data?.id as string) });
      queryClient.invalidateQueries({ queryKey: tourKeys.lists() });
    },
  });
};

export const useDeleteTour = () => {
  const queryClient = useQueryClient();
  const { Tour } = useClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data, errors } = await Tour.delete({ id });
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tourKeys.lists() });
    },
  });
};

export const useUpdateTourStatus = () => {
  const queryClient = useQueryClient();
  const { Tour } = useClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: string; status: TourStatus }) => {
      const { data, errors } = await Tour.update({
        id,
        status,
      });
      if (errors) {
        throw new Error(errors.map((e) => e.message).join("\n"));
      }
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: tourKeys.detail(data?.id as string) });
      queryClient.invalidateQueries({ queryKey: tourKeys.lists() });
    },
  });
};
