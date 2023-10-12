import { ICustomerRepository } from '../../application/icustomer-repository'
import { Customer } from '../../application/entity/customer'
import { CustomerService } from './customer-service'
import { ICustomerService } from '../icustomer-service'

interface SutTypes {
  sut: ICustomerService
  customerRepository: ICustomerRepository
}

class CustomerRepositoryStub implements ICustomerRepository {
  async create (customer: Customer): Promise<Customer> {
    return new Promise((resolve, reject) => {
      resolve(new Customer('123', 'John'))
    })
  }
}

const makeSut = (): SutTypes => {
  const customerRepository = new CustomerRepositoryStub()
  return {
    sut: new CustomerService(customerRepository),
    customerRepository
  }
}

describe('customer service', () => {
  it('should create new customer', async () => {
    const { sut } = makeSut()
    const customer = new Customer('123', 'John')
    const result = await sut.create(customer)
    expect(result.name).toBe('John')
  })

  it('should throw new error', async () => {
    const { sut, customerRepository } = makeSut()
    jest.spyOn(customerRepository, 'create').mockImplementation(async () => {
      throw new Error('any error')
    })
    const customer = new Customer('123', 'John')
    const promise = sut.create(customer)
    await expect(promise).rejects.toThrowError('any error')
  })
})
