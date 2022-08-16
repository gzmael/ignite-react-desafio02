import styled from 'styled-components'

export const Container = styled.label`
  display: block;
  margin: 1rem 0;

  > span {
    font: ${props => props.theme['font-roboto-error']};
  }

  input {
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${props => props.theme['brown-500']};
    padding: 0.875em;
    background: ${props => props.theme['brown-400']};
    color: ${props => props.theme['brown-700']};

    &::placeholder {
      color: ${props => props.theme['brown-600']};
      font: ${props => props.theme['font-coffee-description']};
    }
  }
`
