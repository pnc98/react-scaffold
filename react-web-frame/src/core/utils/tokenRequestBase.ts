import { Token as TokenStorage } from "../storage/token";
import { RequestBase } from "../service/requestBase";

export function tokenRequestBuilder() {
  const tokenStorage = new TokenStorage();
  const authRequestBuilder = new RequestBase()
    .header("Authorization", tokenStorage.token as string);
  return authRequestBuilder;
}