import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: 0.7fr 1fr;
  grid-gap: 0.5rem;
  align-items: flex-start;

  padding: 0.5rem 0.25rem;

  > span {
    text-align: right;
    font: ${props => props.theme['font-checkout-item']};
  }
`

export const ProductSelector = styled.div`
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const ProductActions = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font: ${props => props.theme['font-header-title']};
    color: ${props => props.theme['brown-800']};
    margin-bottom: 0.5rem;
  }
`

export const ButtonsGroup = styled.div`
  display: flex;

  > button {
    font: ${props => props.theme['font-coffee-description']};
    svg {
      color: ${props => props.theme['purple-500']};
      margin-right: 0.25rem;
    }
  }
`
