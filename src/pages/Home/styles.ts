import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  max-width: 70rem;
  margin: 2rem auto;

  h2 {
    font: ${props => props.theme['font-baloo2-title-2']};
  }
`
