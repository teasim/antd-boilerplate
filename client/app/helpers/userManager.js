import { createUserManager, WebStorageStateStore } from "teasim-plugin-authman";

const config = {
  client_id:
    "771316064798-kb4fjr1c0d1ad8jcu76dqmsrskg99oto.apps.googleusercontent.com",
  redirect_uri: `${window.location.protocol}//${window.location
    .hostname}${window.location.port
    ? `:${window.location.port}`
    : ""}/callback`,
  response_type: "token id_token",
  scope: "openid profile",
  authority: "https://accounts.google.com",
  silent_redirect_uri: `${window.location.protocol}//${window.location
    .hostname}${window.location.port
    ? `:${window.location.port}`
    : ""}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({ store: window.localStorage })
};

// const config = {
//   client_id: "example-app",
//   redirect_uri: `${window.location.protocol}//${window.location
//     .hostname}${window.location.port
//     ? `:${window.location.port}`
//     : ""}/callback`,
//   response_type: "token id_token",
//   scope: "openid profile",
//   authority: "http://127.0.0.1:5556",
//   silent_redirect_uri: `${window.location.protocol}//${window.location
//     .hostname}${window.location.port
//     ? `:${window.location.port}`
//     : ""}/silent_renew.html`,
//   automaticSilentRenew: true,
//   filterProtocolClaims: true,
//   loadUserInfo: false,
//   userStore: new WebStorageStateStore({ store: window.localStorage })
// };

const userManager = createUserManager(config);

export default userManager;
