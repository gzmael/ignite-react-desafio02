import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  border-radius: 6px;
  background-color: ${props => props.theme['brown-400']};
  padding: 0.597em;
  margin-right: 0.5em;

  span {
    margin: 0 0.25rem;
    width: 1.25rem;
    text-align: center;
  }

  button {
    background: none;
    color: ${props => props.theme['purple-500']};
    cursor: pointer;
    transition: color ease 0.3s;
    outline: none;
    &:focus {
      box-shadow: none;
    }

    &:hover {
      color: ${props => props.theme['purple-900']};
    }
  }
`
