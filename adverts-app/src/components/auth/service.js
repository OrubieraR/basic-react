import client, { setAuthorizationHeader } from "../../api/client";
import storage from "../../utils/storage";

export const login = (credentials, ischecked) => {
  return client.post("/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    console.log("Ischecked llega como:" + ischecked);
    if (ischecked === true) {
      storage.set("auth", accessToken);
    }
  });
};
