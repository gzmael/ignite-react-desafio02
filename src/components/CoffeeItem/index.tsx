import { useContext, useState } from 'react'

import { ShoppingCartSimple } from 'phosphor-react'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { Coffee } from '../../interfaces/coffee'
import { Button } from '../Button'
import { Counter } from '../Counter'
import { Tag } from '../Tag'
import * as S from './styles'

interface CoffeeProps {
  coffee: Coffee
}

const CoffeeItem = ({ coffee }: CoffeeProps) => {
  const [counter, setCounter] = useState(1)
  const { addNewOrder, updateQuantity, orders } = useContext(CheckoutContext)
  const priceFormatted = new Intl.NumberFormat('pt-BR').format(coffee.price)

  function handlePlusCounter() {
    if (counter < 99) {
      setCounter(prev => prev + 1)
    }
  }
  function handleMinusCounter() {
    if (counter > 1) {
      setCounter(prev => prev - 1)
    }
  }

  function handleAddToCheckout() {
    const hasOnOrders = orders.find(order => order.id === coffee.id)
    if (!hasOnOrders) {
      addNewOrder({
        coffee,
        id: coffee.id,
        price: coffee.price,
        quantity: counter,
        total: coffee.price * counter
      })
    } else {
      const amount = hasOnOrders.quantity + counter
      updateQuantity(amount, hasOnOrders.id)
    }
    setCounter(1)
  }

  return (
    <S.Container>
      <img src={coffee.image} alt={`Café ${coffee.name}`} />
      <S.TagsContainer>
        {coffee.tags.map(tag => (
          <Tag text={tag} key={tag} />
        ))}
      </S.TagsContainer>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <S.ActionContainer>
        <S.ActionPrice>
          R$ <span>{priceFormatted}</span>
        </S.ActionPrice>
        <S.ActionBuy>
          <Counter
            counter={counter}
            onMinus={handleMinusCounter}
            onPlus={handlePlusCounter}
          />
          <Button
            type="button"
            variants="buy"
            title="Adicionar ao Carrinho"
            onClick={handleAddToCheckout}
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </Button>
        </S.ActionBuy>
      </S.ActionContainer>
    </S.Container>
  )
}

export { CoffeeItem }
