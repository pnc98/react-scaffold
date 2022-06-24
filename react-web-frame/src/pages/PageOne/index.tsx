import { Button } from "@material-ui/core";
import { FC } from "react";
import { fromFetch } from 'rxjs/fetch';

export const PageOne: FC = () => {
  const test = () => {
    const data$ = fromFetch('/api/userloginin', { 
      method: "post", 
      headers: { "Content-Type": "application/json;charset=UTF-8" }, 
      body: JSON.stringify({ userId: "wrq", password: "123"}) 
    })
    .pipe()
    data$.subscribe({
      next: result => console.log(result),
      complete: () => console.log('done')
    })
  };
  return (
    <div>
      PageOne
      <Button onClick={test}>发送请求</Button>
    </div>
  )
};