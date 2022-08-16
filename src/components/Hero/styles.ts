import styled from 'styled-components'

import bgHero from '../../assets/bg-hero.png'

export const Wrapper = styled.div`
  background: url(${bgHero}) 0 0 no-repeat;
  width: 100%;
`

export const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  height: 34rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Texts = styled.div`
  max-width: 36.75rem;

  h1 {
    font: ${props => props.theme['font-baloo2-title']};
    color: ${props => props.theme['brown-800']};
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }

  ul {
    margin-top: 4.125rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 1.25rem;

    li {
      width: 100%;
      display: grid;
      grid-template-columns: 2rem 1fr;
      align-items: center;
      grid-gap: 0.75rem;

      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`
