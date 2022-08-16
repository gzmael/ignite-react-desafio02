import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const ContainerInput = styled.input`
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

  &:read-only {
    background: ${props => props.theme['brown-500']};
    border: 1px solid ${props => props.theme['brown-600']};
    cursor: not-allowed;
  }
`

export const Helper = styled.span`
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  color: ${props => props.theme['brown-600']};
  font: ${props => props.theme['font-coffee-description']};
  font-style: italic;
`
