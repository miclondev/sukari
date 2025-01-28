"use client";

import outputs from "@/amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import "aws-amplify/auth/enable-oauth-listener";
import { Hub } from "aws-amplify/utils";

Amplify.configure(outputs);

Hub.listen("auth", async ({ payload }) => {
  switch (payload.event) {
    case "signInWithRedirect":
      const user = await getCurrentUser();
      const userAttributes = await fetchUserAttributes();
      console.log({ user, userAttributes });
      window.location.reload();
      break;
    case "signInWithRedirect_failure":
      // handle sign in failure
      break;
  }
});

export const ConfigureAmplifyClientSide = () => {
  return null;
};
