import { Customer } from './entity/customer'

export interface ICustomerService {
  create: (id: string, name: string) => Promise<Customer>
}
