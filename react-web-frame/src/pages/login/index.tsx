import { FC } from "react";
import { useNavigate } from "react-router-dom";
import mainStyle from "./style/index.module.scss";

export const Login: FC = () => {
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/main", { replace: true });
  };
  return (
    <div className={mainStyle.main}>
       it's the login page.
       <button onClick={redirect}>跳转</button>
    </div>
  )
};