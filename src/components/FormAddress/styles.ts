import styled from 'styled-components'

export const FormAddressContainer = styled.div`
  label {
    width: 12.5rem;
  }

  .cols-1 label {
    width: 100%;
  }
  .cols-2,
  .cols-3 {
    width: 100%;
    display: grid;
    grid-gap: 0.875rem;
  }

  .cols-2 {
    grid-template-columns: 12.5rem 1fr;
    label {
      width: 100%;
    }
  }

  .cols-3 {
    width: 100%;
    display: grid;
    grid-template-columns: 12.5rem 1fr 3.75rem;
    label {
      width: 100%;
    }
  }
`
