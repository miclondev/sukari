import { defineAuth, secret } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailStyle: "CODE",
      verificationEmailSubject: "Welcome to Sukari!",
    },
    externalProviders: {
      google: {
        clientId: secret("googleClientId"),
        clientSecret: secret("googleClientSecret"),
        scopes: ["openid", "email", "profile"],
      },
      callbackUrls: ["http://localhost:3000/", "https://dev.sukari.app/", "https://sukari.app/"],
      logoutUrls: ["http://localhost:3000/", "https://dev.sukari.app/", "https://sukari.app/"],
    },
  },
  groups: ["ADMIN", "USER", "SALES"],
});
