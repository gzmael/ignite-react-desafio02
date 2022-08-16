import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { Address } from '../interfaces/address'
import { Order } from '../interfaces/order'
import { PaymentType } from '../interfaces/payment'
import {
  addNewOrderAction,
  finishCheckoutAction,
  removeOrderAction,
  resetCheckoutAction,
  setAddressAction,
  setPaymentTypeAction,
  updateQuantityOrderAction
} from '../reducers/checkout/actions'
import { checkoutReducer } from '../reducers/checkout/reducer'

interface CheckoutContextType {
  orders: Order[]
  delivery_price: number
  payment_type?: PaymentType
  address?: Address
  isFinished: boolean
  addNewOrder: (order: Order) => void
  updateQuantity: (amount: number, idOrder: number) => void
  removeOrder: (idOrder: number) => void
  setPaymentType: (paymentType: PaymentType) => void
  setAddress: (address: Address) => void
  setFinished: () => void
  reset: () => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutContextProviderProps {
  children: ReactNode
}

const CheckoutContextProvider = ({
  children
}: CheckoutContextProviderProps) => {
  const [checkoutState, dispatch] = useReducer(
    checkoutReducer,
    {
      orders: [],
      delivery_price: 3.5,
      isFinished: false
    },
    () => {
      const storedStateJSON = localStorage.getItem(
        '@ignite-coffee:checkout-state-1.0.2'
      )

      if (storedStateJSON) {
        const stateParsed = JSON.parse(storedStateJSON)
        if (stateParsed) {
          return stateParsed
        }
      }
      return {
        orders: [],
        delivery_price: 3.5,
        isFinished: false
      }
    }
  )

  useEffect(() => {
    if (checkoutState) {
      const stateJson = JSON.stringify(checkoutState)

      localStorage.setItem('@ignite-coffee:checkout-state-1.0.2', stateJson)
    }
  }, [checkoutState])

  const { delivery_price, isFinished, orders, address, payment_type } =
    checkoutState

  function addNewOrder(newOrder: Order) {
    dispatch(addNewOrderAction(newOrder))
  }

  function updateQuantity(amount: number, idOrder: number) {
    dispatch(updateQuantityOrderAction(amount, idOrder))
  }

  function removeOrder(idOrder: number) {
    dispatch(removeOrderAction(idOrder))
  }

  function setPaymentType(paymentType: PaymentType) {
    dispatch(setPaymentTypeAction(paymentType))
  }

  function setAddress(address: Address) {
    dispatch(setAddressAction(address))
  }

  function setFinished() {
    dispatch(finishCheckoutAction())
  }

  function reset() {
    dispatch(resetCheckoutAction())
  }

  return (
    <CheckoutContext.Provider
      value={{
        address,
        delivery_price,
        isFinished,
        orders,
        payment_type,
        addNewOrder,
        updateQuantity,
        removeOrder,
        setPaymentType,
        setAddress,
        setFinished,
        reset
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export { CheckoutContextProvider }
