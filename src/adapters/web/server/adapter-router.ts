import { Request, Response } from 'express'
import { IHandler } from '../interface/ihandler'
import { IHttpRequest } from '../interface/ihttp-request'

export const adapterRouter = (handler: IHandler): any => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      params: req.params,
      body: req.body
    }
    const httpResponse = await handler.handle(httpRequest)
    if (httpResponse.status === 200) {
      res.status(httpResponse.status).json(httpResponse.body)
    } else {
      res.status(httpResponse.status).json({
        error: httpResponse.body.message
      })
    }
  }
}
