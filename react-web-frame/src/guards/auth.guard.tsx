import React, { FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextPropType } from "../core/model/contextPropType";
import { Token } from "../core/storage/token";
import { Login } from "../pages/login";

const AuthGuard: FC<ContextPropType> = (props: ContextPropType) => {
  const { children } = props;
  let navigate = useNavigate();
  const tokenStorage = new Token();
  const redirectRoute = useCallback(() => {
    if(tokenStorage.token === undefined) {
      navigate("/login", { replace: true });
    };
  }, [tokenStorage.token, navigate]);
  useEffect(() => {
    redirectRoute();
  } ,[redirectRoute]);
  if (tokenStorage.token === undefined) {
    return <Login />
  };
  return <>{ children }</>;
};

export default AuthGuard;
