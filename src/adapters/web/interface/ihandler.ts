import { IHttpRequest } from './ihttp-request'
import { IHttpResponse } from './ihttp-response'

export interface IHandler {
  handle: (request: IHttpRequest) => Promise<IHttpResponse>
}
