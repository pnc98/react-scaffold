import { fromFetch } from "rxjs/fetch";
import { createURL } from "../../utils/createUrl";
import { withGetParams } from "../../utils/withGetParams";
import { RequestBase } from "../requestBase";

const POST_EXAMPLE_API = "/api/userloginin";
const GET_EXAMPLE_API = "/api/getPresignedObjectUrl";
//样例，需要根据具体情况来进行修改。
//POST
export const postExampleApi = (params: any) => {
  return fromFetch(
    new RequestBase()
    .url(POST_EXAMPLE_API)
    .method("post")
    .param(params)
    .build()
  );
};
//GET
export const getExampleApi = (params: any) => {
  return fromFetch(
    new RequestBase()
    .url(createURL(GET_EXAMPLE_API, withGetParams(params as any)))
    .method("get")
    .build()
  );
};