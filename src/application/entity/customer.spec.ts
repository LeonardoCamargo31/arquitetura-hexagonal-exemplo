import { Customer } from './customer'

describe('Customer unit tests', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      const customer = new Customer('', 'John')
    }).toThrowError('id is required')
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      const customer = new Customer('123', '')
    }).toThrowError('name is required')
  })

  it('should change name', () => {
    // arrange
    const customer = new Customer('123', 'John')
    // act
    customer.changeName('Jane')
    // assert
    expect(customer.name).toBe('Jane')
  })

  it('should activate customer', () => {
    const customer = new Customer('123', 'John')
    customer.activate()
    expect(customer.isActive()).toBe(true)
  })

  it('should activate customer', () => {
    const customer = new Customer('123', 'John')
    customer.deactivate()
    expect(customer.isActive()).toBe(false)
  })
})
