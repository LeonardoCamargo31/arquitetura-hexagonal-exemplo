import { Address } from './application/entity/address'
import { Customer } from './application/entity/customer'
import { Order } from './application/entity/order'
import { OrderItem } from './application/entity/order-item'

// aggregate customer
const customer = new Customer('123', 'Leonardo camargo')
const address = new Address('rua dois', 2, '12345-678', 'São Paulo', 'SP')
customer.address = address
customer.activate()

// aggregate order
const item1 = new OrderItem('1', 'Item 1', 10)
const item2 = new OrderItem('2', 'Item 2', 10)
const order = new Order('1', '123', [item1, item2])