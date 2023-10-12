import { ICustomerRepository } from '../../application/icustomer-repository'
import { Customer } from '../../application/entity/customer'
import { CustomerRepository } from './customer-repository'
import { MongoHelper } from './mongo-helper'

interface SutTypes {
  sut: ICustomerRepository
}

const makeSut = (): SutTypes => {
  return {
    sut: new CustomerRepository()
  }
}

describe('customer repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const collection = await MongoHelper.getCollection('customer')
    await collection.deleteMany({})
  })

  it('should create new customer', async () => {
    const { sut } = makeSut()
    const customer = new Customer('123', 'John')
    const result = await sut.create(customer)
    expect(result.name).toBe('John')
  })
})
