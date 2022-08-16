import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  padding: 2rem 0;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding-left: 0.75rem;
  }
`

export const ButtonLocale = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  border-radius: 6px;
  padding: 0.5rem;
  backgroud-color: ${props => props.theme['purple-100']};
  color: ${props => props.theme['purple-500']};

  &:hover {
    backgroud-color: ${props => props.theme['purple-500']};
    color: ${props => props.theme.white};
  }
`
