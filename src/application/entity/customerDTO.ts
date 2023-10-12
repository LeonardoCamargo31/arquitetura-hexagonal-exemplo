import { Customer } from './customer'

export class CustomerDTO {
  private readonly _id: string
  private readonly _name: string=''
  private readonly _active: boolean=false

  constructor (customer: Customer) {
    this._id = customer.id
    this._name = customer.name
    this._active = customer.isActive()
  }

  get id (): string {
    return this._id
  }

  get name (): string {
    return this._name
  }

  isActive (): boolean {
    return this._active
  }
}
