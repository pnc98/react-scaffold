import { FC } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../../assets/image/404.png";
import mainStyle from "./style/index.module.scss";

export const NotFound: FC = () => {
  let navigate = useNavigate();
  
  const backToMainPage = () => {
    navigate("/main", { replace: true });
  };
  return (
    <div className={mainStyle.main}>
      <img src={NotFoundImg} alt="404" />
      <button onClick={backToMainPage}>返回主界面</button>
    </div>
  )
};