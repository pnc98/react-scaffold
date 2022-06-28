export class RequestBase {
  private requestStructure: RequestInit = {
    headers: { "Content-Type": "application/json;charset=UTF-8" }
  };
  private requestUrl: string = "";

  url(url: string): RequestBase {
    this.requestUrl = url;
    return this
  };
  method(method: string): RequestBase {
    this.requestStructure.method = method;
    return this
  };
  param(param: any): RequestBase {
    this.requestStructure.body = JSON.stringify(param);
    return this
  };
  build(): Request {
    return new Request(this.requestUrl, this.requestStructure);
  };
  header(key: string, val: string) {
    (this.requestStructure.headers as Record<string, string>)[key] = val;
    return this;
  };
};