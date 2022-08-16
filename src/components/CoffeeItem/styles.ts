import styled from 'styled-components'

export const Container = styled.li`
  background: ${props => props.theme['brown-200']};
  border-radius: 6px 36px;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font: ${props => props.theme['font-baloo2-title-3']};
    color: ${props => props.theme['brown-800']};
  }

  p {
    font: ${props => props.theme['font-coffee-description']};
    color: ${props => props.theme['brown-600']};
    margin-top: 0.5rem;
  }

  img {
    margin-top: -2.5rem;
  }
`

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.75rem auto 1rem;

  span + span {
    margin-left: 0.25rem;
  }
`

export const ActionContainer = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionPrice = styled.div`
  width: 100%;
  font: ${props => props.theme['font-coffee-description']};

  span {
    font: ${props => props.theme['font-coffee-price']};
  }
`

export const ActionBuy = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
