import { Customer } from './entity/customer'

export interface ICustomerRepository {
  create: (customer: Customer) => Promise<Customer>
}
