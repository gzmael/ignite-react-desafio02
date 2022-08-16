import styled from 'styled-components'

export const Container = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${props => props.theme['yellow-100']};
  border-radius: 9999px;
  color: ${props => props.theme['yellow-900']};
  font: ${props => props.theme['font-roboto-tag']};
  text-transform: uppercase;
`
