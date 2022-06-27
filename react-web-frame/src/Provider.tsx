import { FC } from "react";
import { ContextPropType } from "./core/model/contextPropType";

const Providers: FC<ContextPropType> = (props: ContextPropType) => {
  const { children } = props;
  return (
    <>
      { children}
    </>
  )
};
export default Providers;