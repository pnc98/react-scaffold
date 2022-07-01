import { Button } from "@material-ui/core";
import { FC } from "react";
import { getExampleApi, postExampleApi } from "../../core/service/api/exampleApi";
import { Observable, of, map } from 'rxjs';
import { arrayBuffer } from "stream/consumers";

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
  const test = () => {
    // const test = new Observable(subscriber => {
    // })
    // of(1,2,3)
    // .pipe(
    //   map((x) => x * x)
    // )
    // .subscribe(x => {
    //   console.log(x)
    // });
    const a: number[] = [1,2,3]
    const b: number[] =[2,3,4,5]
    let c: number[] = a.concat(b)
    let d: number[] = []
    console.log(c)
    let e: number[] = c.reduce((array, cur) => {
      if(array.indexOf(cur) === -1 ) {
        return array.concat(cur)
      } else {
        return array
      }
    }, d);
    console.log(e)
  };
  return (
    <div>
      PageOne
      <Button variant="contained" onClick={testPOST}>发送POST请求</Button>
      <Button variant="contained" onClick={testGET}>发送GET请求</Button>
      <Button variant="contained" onClick={test}>测试</Button>
    </div>
  )
};