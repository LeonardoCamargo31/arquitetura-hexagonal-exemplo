import { ICustomerRepository } from '../icustomer-repository'
import { ICustomerService } from '../icustomer-service'
import { Customer } from '../entity/customer'

export class CustomerService implements ICustomerService {
  private readonly _customerRepository: ICustomerRepository

  constructor (customerRepository: ICustomerRepository) {
    this._customerRepository = customerRepository
  }

  async create (customer: Customer): Promise<Customer> {
    return await this._customerRepository.create(customer)
  }
}
