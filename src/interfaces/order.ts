import { Coffee } from './coffee'

export interface Order {
  id: number
  price: number
  quantity: number
  total: number
  coffee: Coffee
}
