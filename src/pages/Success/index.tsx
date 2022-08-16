import { useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import illustration from '../../assets/Illustration.png'
import { Button } from '../../components/Button'
import { IconsList } from '../../components/IconsList'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { PaymentType } from '../../interfaces/payment'
import * as S from './styles'

const paymentText: Record<PaymentType, string> = {
  card_credit: 'Cartão de Crédio',
  card_debit: 'Cartão de Débito',
  money: 'Dinheiro'
}

const Success = () => {
  const { address, payment_type, isFinished, reset } =
    useContext(CheckoutContext)
  const navigate = useNavigate()

  const handleResetCheckout = () => {
    reset()
    navigate('/')
  }

  useEffect(() => {
    if (!isFinished) {
      navigate('/checkout')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <header>
        <h2>Uhu! Pedido confirmado!</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <S.Content>
        <S.Box>
          <ul>
            {address && (
              <li>
                <IconsList variant="cart" />
                <div>
                  Entrega em:{' '}
                  <strong>
                    {address?.address}, {address?.number},
                  </strong>{' '}
                  {address?.neighborhood} - {address?.city}, {address?.state}
                </div>
              </li>
            )}
            <li>
              <IconsList variant="timer" />
              <div>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </div>
            </li>
            {payment_type && (
              <li>
                <IconsList variant="coffee" />
                <div>
                  Pagamento na entrega
                  <br />
                  <strong>{paymentText[payment_type]}</strong>
                </div>
              </li>
            )}
          </ul>
          <Button
            variants="primary"
            title="Iniciar compras"
            onClick={handleResetCheckout}
          >
            Voltar às Compras
          </Button>
        </S.Box>
        <img src={illustration} alt="Ilustração" />
      </S.Content>
    </S.Container>
  )
}

export { Success }
