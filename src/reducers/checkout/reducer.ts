/* eslint-disable @typescript-eslint/no-explicit-any */
import produce from 'immer'

import { CheckoutState } from '../../interfaces/checkout'
import { ActionTypes } from './actions'

export function checkoutReducer(
  state: CheckoutState,
  action: any
): CheckoutState {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ADD_NEW_ORDER:
      return produce(state, draft => {
        draft.orders.push(payload.newOrder)
      })
    case ActionTypes.REMOVE_ORDER:
      return produce(state, draft => {
        const orderIndex = draft.orders.findIndex(
          order => order.id === payload.idOrder
        )
        draft.orders.splice(orderIndex, 1)
      })
    case ActionTypes.UPDATE_QUANTITY_ORDER:
      return produce(state, draft => {
        const orderIndex = draft.orders.findIndex(
          order => order.id === payload.idOrder
        )

        draft.orders[orderIndex].quantity = payload.amount
        const price = draft.orders[orderIndex].price
        draft.orders[orderIndex].total = payload.amount * price
      })
    case ActionTypes.SET_PAYMENT_TYPE:
      return produce(state, draft => {
        draft.payment_type = payload.payment
      })
    case ActionTypes.SET_ADDRESS:
      return produce(state, draft => {
        draft.address = payload.address
      })
    case ActionTypes.RESET_CHECKOUT:
      return produce(state, draft => {
        draft.address = undefined
        draft.orders = []
        draft.payment_type = undefined
        draft.isFinished = false
      })
    case ActionTypes.FINISH_CHECKOUT:
      return produce(state, draft => {
        draft.isFinished = true
      })
    default:
      return state
  }
}
