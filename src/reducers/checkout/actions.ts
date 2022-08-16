import { Address } from '../../interfaces/address'
import { Order } from '../../interfaces/order'
import { PaymentType } from '../../interfaces/payment'

export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  UPDATE_QUANTITY_ORDER = 'UPDATE_QUANTITY_ORDER',
  REMOVE_ORDER = 'REMOVE_ORDER',
  SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE',
  SET_ADDRESS = 'SET_ADDRESS',
  FINISH_CHECKOUT = 'FINISH_CHECKOUT',
  RESET_CHECKOUT = 'RESET_CHECKOUT'
}

export function addNewOrderAction(newOrder: Order) {
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {
      newOrder
    }
  }
}

export function updateQuantityOrderAction(amount: number, idOrder: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_ORDER,
    payload: {
      amount,
      idOrder
    }
  }
}

export function removeOrderAction(idOrder: number) {
  return {
    type: ActionTypes.REMOVE_ORDER,
    payload: {
      idOrder
    }
  }
}

export function setPaymentTypeAction(payment: PaymentType) {
  return {
    type: ActionTypes.SET_PAYMENT_TYPE,
    payload: { payment }
  }
}

export function setAddressAction(address: Address) {
  return {
    type: ActionTypes.SET_ADDRESS,
    payload: { address }
  }
}

export function resetCheckoutAction() {
  return {
    type: ActionTypes.RESET_CHECKOUT
  }
}

export function finishCheckoutAction() {
  return {
    type: ActionTypes.FINISH_CHECKOUT
  }
}
