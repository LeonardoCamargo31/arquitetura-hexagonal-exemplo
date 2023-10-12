
export class Customer {
  private readonly _id: string
  private _name: string=''
  private _active: boolean=false

  constructor (id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  validate (): void {
    if (this._id.length === 0) {
      throw new Error('id is required')
    }
    if (this._name.length === 0) {
      throw new Error('name is required')
    }
    if (this._active === undefined) {
      throw new Error('name is required')
    }
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

  changeName (name: string): void {
    this._name = name
    this.validate()
  }

  activate (): void {
    this._active = true
  }

  deactivate (): void {
    this._active = false
  }
}
