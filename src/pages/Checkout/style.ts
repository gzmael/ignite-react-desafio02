import styled from 'styled-components'

export const Container = styled.form`
  max-width: 70rem;
  margin: 2rem auto;
  width: 100%;

  display: grid;
  grid-template-columns: 0.588fr 0.412fr;
  grid-gap: 2rem;

  h4 {
    font: ${props => props.theme['font-baloo2-title-4']};
    margin-bottom: 1rem;
  }

  aside {
    width: 100%;
  }
`
export const AddressPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.75rem;
`

const GrayBox = styled.div`
  background-color: ${props => props.theme['brown-200']};
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    align-items: start;
    justify-content: start;

    grid-gap: 0.5rem;
  }
`

export const AddressContainer = styled(GrayBox)`
  svg {
    color: ${props => props.theme['yellow-900']};
  }
`

export const PaymentContainer = styled(GrayBox)`
  svg {
    color: ${props => props.theme['purple-900']};
  }
`

export const CheckoutContainer = styled(GrayBox)`
  border-radius: 6px 44px;
  > button {
    width: 100%;
    justify-content: center;
    margin-top: 1.5rem;
  }
`

export const HeaderBox = styled.div`
  h5 {
    font: ${props => props.theme['font-header-title']};
  }
  p {
    font: ${props => props.theme['font-coffee-description']};
  }
`
