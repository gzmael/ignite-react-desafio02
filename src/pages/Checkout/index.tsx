import { useContext, useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { CheckoutList } from '../../components/CheckoutList'
import { FormAddress } from '../../components/FormAddress'
import { FormPayment } from '../../components/FormPayment'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import {
  SubmitCheckoutType,
  submitCheckoutSchema
} from '../../validations/checkout'
import * as S from './style'

const Checkout = () => {
  const formData = useForm<SubmitCheckoutType>({
    resolver: yupResolver(submitCheckoutSchema)
  })
  const { setAddress, setFinished, payment_type, isFinished } =
    useContext(CheckoutContext)
  const { watch, handleSubmit, reset } = formData
  const navigate = useNavigate()

  useEffect(() => {
    if (isFinished) {
      navigate('/success', { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const code = watch('code')
  const address = watch('address')
  const neighborhood = watch('neighborhood')
  const city = watch('city')
  const state = watch('state')

  const isDisabled =
    !code || !address || !city || !state || !neighborhood || !payment_type

  const handleCreateNewCycle = (data: SubmitCheckoutType) => {
    const { address, city, code, neighborhood, number, state, complement } =
      data
    setAddress({
      address,
      city,
      code,
      neighborhood,
      number,
      state,
      complement
    })
    setFinished()
    navigate('/success', { replace: true })
    reset()
  }

  return (
    <S.Container onSubmit={handleSubmit(handleCreateNewCycle)}>
      <aside>
        <h4>Complete seu pedido</h4>
        <S.AddressPaymentContainer>
          <S.AddressContainer>
            <header>
              <MapPinLine size={22} weight="light" />
              <S.HeaderBox>
                <h5>Endereço de Entrega</h5>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </S.HeaderBox>
            </header>
            <FormProvider {...formData}>
              <FormAddress />
            </FormProvider>
          </S.AddressContainer>
          <S.PaymentContainer>
            <header>
              <CurrencyDollar size={22} weight="light" />
              <S.HeaderBox>
                <h5>Endereço de Entrega</h5>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </S.HeaderBox>
            </header>
            <FormProvider {...formData}>
              <FormPayment />
            </FormProvider>
          </S.PaymentContainer>
        </S.AddressPaymentContainer>
      </aside>
      <aside>
        <h4>Cafés selecionados</h4>
        <S.CheckoutContainer>
          <CheckoutList />
          <Button
            type="submit"
            variants="primary"
            title="Confirmar"
            disabled={isDisabled}
          >
            Confirmar Pedido
          </Button>
        </S.CheckoutContainer>
      </aside>
    </S.Container>
  )
}

export { Checkout }
