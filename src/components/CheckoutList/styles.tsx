import styled from 'styled-components'

export const Container = styled.div``

export const ProductList = styled.ul``

export const ProductItem = styled.li`
  border-bottom: 1px solid ${props => props.theme['brown-400']};
  padding: 1.5rem 0;
  &:first-child {
    padding-top: 0;
  }
`

export const CheckoutAmout = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.875rem;
  margin-top: 1.5rem;
`

export const CheckoutAmoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font: ${props => props.theme['font-header-title']};

  &.amount {
    font: ${props => props.theme['font-checkout-total']};
    color: ${props => props.theme['brown-800']};
  }
`
