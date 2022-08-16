import styled from 'styled-components'

export const Container = styled.label`
  display: block;
  margin: 1rem 0;

  > span {
    font: ${props => props.theme['font-roboto-error']};
  }
`
