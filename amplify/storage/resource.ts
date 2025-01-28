import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "sukaristorage",
  access: (allow) => ({
    "tour/*": [
      allow.authenticated.to(["read"]),
      allow.groups(["ADMIN"]).to(["read", "write", "delete"]),
    ],
    "profile/*": [allow.authenticated.to(["read", "write", "delete"])],
  }),
});
