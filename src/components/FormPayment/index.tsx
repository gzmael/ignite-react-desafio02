import React, { useContext } from 'react'

import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { CheckoutContext } from '../../contexts/CheckoutContext'
import { PaymentType } from '../../interfaces/payment'
import { SubmitCheckoutType } from '../../validations/checkout'
import { InputRadio } from '../InputRadio'
import * as S from './styles'

interface ValuesList {
  value: PaymentType
  label: string
  icon: JSX.Element
}

const FormPayment = () => {
  const {
    register,
    formState: { errors }
  } = useFormContext<Pick<SubmitCheckoutType, 'payment_type'>>()
  const { setPaymentType, payment_type } = useContext(CheckoutContext)
  const values: ValuesList[] = [
    {
      value: 'card_credit',
      label: 'cartão de crédito',
      icon: <CreditCard size={16} weight="light" />
    },
    {
      value: 'card_debit',
      label: 'cartão de debito',
      icon: <Bank size={16} weight="light" />
    },
    {
      value: 'money',
      label: 'dinheiro',
      icon: <Money size={16} weight="light" />
    }
  ]

  const handleChange = (value: PaymentType) => {
    setPaymentType(value)
  }
  return (
    <div>
      <S.Container>
        {values.map(payment => (
          <InputRadio
            key={payment.value}
            label={payment.label}
            name="payment_type"
            register={register}
            value={payment.value}
            icon={payment.icon}
            onChange={() => handleChange(payment.value)}
            actived={payment.value === payment_type}
          />
        ))}
      </S.Container>
      {errors.payment_type && <span>{errors.payment_type.message}</span>}
    </div>
  )
}

export { FormPayment }
