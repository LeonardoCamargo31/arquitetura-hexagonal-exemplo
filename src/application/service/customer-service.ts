import { Customer } from '../application/entity/customer'

export interface ICustomerService {
  create: (customer: Customer) => Customer
}

export class CustomerService implements ICustomerService {
  constructor () {

  }

  create (customer: Customer): Customer {}
}
