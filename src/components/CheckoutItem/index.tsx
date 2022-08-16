import { useContext } from 'react'

import { Trash } from 'phosphor-react'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { Order } from '../../interfaces/order'
import { formatMoney } from '../../utils/formatter'
import { Button } from '../Button'
import { Counter } from '../Counter'
import * as S from './styles'

interface CheckoutItemProps {
  order: Order
}

const CheckoutItem = ({ order }: CheckoutItemProps) => {
  const { removeOrder, updateQuantity } = useContext(CheckoutContext)
  const { quantity, id, coffee, total } = order

  const amountFormatted = formatMoney(total)

  const handlePlus = () => {
    if (quantity < 99) {
      updateQuantity(quantity + 1, id)
    }
  }

  const handleMinus = () => {
    if (quantity > 1) {
      updateQuantity(quantity - 1, id)
    }
  }
  const handleRemove = () => {
    removeOrder(id)
  }

  return (
    <S.Container>
      <S.ProductSelector>
        <img src={coffee.image} alt={coffee.name} />
        <S.ProductActions>
          <h5>{coffee.name}</h5>
          <S.ButtonsGroup>
            <Counter
              counter={quantity}
              onMinus={handleMinus}
              onPlus={handlePlus}
            />
            <Button
              variants="small"
              title="Remover Item"
              onClick={handleRemove}
            >
              <Trash size={16} />
              remover
            </Button>
          </S.ButtonsGroup>
        </S.ProductActions>
      </S.ProductSelector>
      <span>{amountFormatted}</span>
    </S.Container>
  )
}

export { CheckoutItem }
