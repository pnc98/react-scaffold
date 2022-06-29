import { FC } from "react";
import { ContextPropType } from "./core/model/contextPropType";
import AuthGuard from "./guards/auth.guard";

const Providers: FC<ContextPropType> = (props: ContextPropType) => {
  const { children } = props;
  return (
    <>
      { children}
    </>
  )
};
export default Providers;