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
    const result = await sut.create('123', 'John')
    expect(result.name).toBe('John')
  })

  it('should throw new error, if customer invalid', async () => {
    const { sut, customerRepository } = makeSut()
    const promise = sut.create('', 'John')
    await expect(promise).rejects.toThrowError('id is required')
  })

  it('should throw new error', async () => {
    const { sut, customerRepository } = makeSut()
    jest.spyOn(customerRepository, 'create').mockImplementation(async () => {
      throw new Error('any error')
    })
    const promise = sut.create('123', 'John')
    await expect(promise).rejects.toThrowError('any error')
  })
})
