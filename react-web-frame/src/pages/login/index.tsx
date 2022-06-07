import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  let navigate = useNavigate();

  const redirect = () => {
    navigate("/main", { replace: true });
  };
  return (
    <div>
       it's the login page.
       <button onClick={redirect}>跳转</button>
    </div>
  )
};