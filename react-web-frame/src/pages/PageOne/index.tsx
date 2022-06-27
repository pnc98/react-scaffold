import { Button } from "@material-ui/core";
import { FC } from "react";
import { getExampleApi, postExampleApi } from "../../core/service/api/exampleApi";

export const PageOne: FC = () => {
  const testPOST = () => {
    const data$ = postExampleApi({ userId: "wrq", password: "123"})
    data$.subscribe({
      next: result => console.log(result),
      complete: () => console.log('done')
    })
  };
  const testGET = () => {
    const data$ = getExampleApi({imgUrl: "1_1656301386800.Png", id: "1"})
    data$.subscribe({
      next: result => console.log(result),
      complete: () => console.log('done')
    })
  };
  return (
    <div>
      PageOne
      <Button variant="contained" onClick={testPOST}>发送POST请求</Button>
      <Button variant="contained" onClick={testGET}>发送GET请求</Button>
    </div>
  )
};