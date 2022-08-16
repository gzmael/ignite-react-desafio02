import { Address } from './address'
import { Order } from './order'
import { PaymentType } from './payment'

export interface CheckoutState {
  orders: Order[]
  delivery_price: number
  isFinished: boolean
  payment_type?: PaymentType
  address?: Address
}
