import { ICustomerService } from '../../../application/icustomer-service'
import { CustomerService } from '../../../application/service/customer-service'
import { CustomerRepository } from '../../database/customer-repository'
import { IHandler } from '../interface/ihandler'
import { IHttpRequest } from '../interface/ihttp-request'
import { IHttpResponse } from '../interface/ihttp-response'
import { v4 as uuidv4 } from 'uuid'

export class CreateCustomerHandler implements IHandler {
  private readonly _customerService: ICustomerService

  constructor (customerService: ICustomerService) {
    this._customerService = customerService
  }

  async handle (request: IHttpRequest): Promise<IHttpResponse> {
    const data = request.body

    const customer = await this._customerService.create(
      uuidv4(),
      data.name
    )

    const httpResponse = {
      status: 200,
      body: {
        id: customer.id,
        name: customer.name,
        active: customer.isActive()
      }
    }

    return httpResponse
  }
}

export const makeCreateCustomerHandler = (): IHandler => {
  const customerRepository = new CustomerRepository()
  const customerService = new CustomerService(customerRepository)
  return new CreateCustomerHandler(customerService)
}
