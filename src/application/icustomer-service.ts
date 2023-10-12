import { Customer } from './entity/customer'

export interface ICustomerService {
  create: (customer: Customer) => Promise<Customer>
}
