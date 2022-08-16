import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme['brown-400']};
  border: 1px solid ${props => props.theme['brown-400']};
  padding: 1rem 0.75rem;
  border-radius: 6px;

  display: flex;
  grid-gap: 0.5rem;
  position: relative;

  svg {
    width: 1rem;
  }

  &.active {
    background: ${props => props.theme['purple-100']};
    border: 1px solid ${props => props.theme['purple-500']};
  }
`

export const ContainerInput = styled.input`
  position: absolute;
  appearance: none;
`

export const Label = styled.label`
  text-transform: uppercase;
  font: ${props => props.theme['font-radio-label']};
  cursor: pointer;
`
