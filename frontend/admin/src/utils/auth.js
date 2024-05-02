import { getToken } from "./tokenManager"
import { getUserInfo } from "../api/auth";

export const checkToken = async () => {
  const { accessToken, refreshToken } = getToken();
  if (accessToken === undefined) {
    return false;
  }
  const response = await getUserInfo(accessToken);
  if (response) {
    if (response.user) {
      const { role } = response.user;
      if (role >= 5) {
        return true;
      }
    }
  }
  return false;
}