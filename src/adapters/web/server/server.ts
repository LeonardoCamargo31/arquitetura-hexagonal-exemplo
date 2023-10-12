import express, { Express, Router } from 'express'
import bodyParser from 'body-parser'
import { adapterRouter } from './adapter-router'
import { makeCreateCustomerHandler } from '../handler/create-customer-handler'

export class Server {
  private readonly server: Express
  private readonly port=3000

  constructor () {
    this.server = express()
  }

  setupMiddleware (): void {
    this.server.use(bodyParser.json())
  }

  setupRoutes (): void {
    const router = Router()
    const createCustomerHandler = makeCreateCustomerHandler()
    router.post('/customer', adapterRouter(createCustomerHandler))
    this.server.use(router)
  }

  public async run (): Promise<void> {
    await this.server.listen(this.port, () => {
      console.log(`The server is listening on port ${this.port}`)
      this.setupMiddleware()
      this.setupRoutes()
    })
  }
}

export const makeServer = (): Server => new Server()
