import { ICustomerRepository } from '../../application/icustomer-repository'
import { Customer } from '../../application/entity/customer'
import { MongoHelper } from './mongo-helper'

export class CustomerRepository implements ICustomerRepository {
  async create (customer: Customer): Promise<Customer> {
    const customerCollection = await MongoHelper.getCollection('customer')
    const record = await customerCollection.insertOne({
      _id: customer.id,
      name: customer.name,
      active: false
    })
    const data = record.ops[0]
    return new Customer(data._id, data.name)
  }
}
