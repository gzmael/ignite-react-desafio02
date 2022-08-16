import React, { useContext, useMemo } from 'react'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { formatMoney } from '../../utils/formatter'
import { CheckoutItem } from '../CheckoutItem'
import * as S from './styles'

const CheckoutList = () => {
  const { orders, delivery_price } = useContext(CheckoutContext)

  const checkoutData = useMemo(() => {
    const amount = orders.reduce((acc, order) => acc + order.total, 0)
    const amountFormatted = formatMoney(amount)
    const deliveryFormatted = formatMoney(delivery_price)
    const totalFormatted = formatMoney(amount + delivery_price)

    return {
      amountFormatted,
      deliveryFormatted,
      totalFormatted
    }
  }, [delivery_price, orders])

  return (
    <S.Container>
      <S.ProductList>
        {orders.map(order => (
          <S.ProductItem key={order.id}>
            <CheckoutItem order={order} />
          </S.ProductItem>
        ))}
      </S.ProductList>
      <S.CheckoutAmout>
        <S.CheckoutAmoutItem>
          <span>Total de itens</span>
          <span>{checkoutData.amountFormatted}</span>
        </S.CheckoutAmoutItem>
        <S.CheckoutAmoutItem>
          <span>Entrega</span>
          <span>{checkoutData.deliveryFormatted}</span>
        </S.CheckoutAmoutItem>
        <S.CheckoutAmoutItem className="amount">
          <span>Total</span>
          <span>{checkoutData.totalFormatted}</span>
        </S.CheckoutAmoutItem>
      </S.CheckoutAmout>
    </S.Container>
  )
}

export { CheckoutList }
