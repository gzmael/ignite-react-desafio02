import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  width: 100%;

  h2 {
    font: ${props => props.theme['font-baloo2-title-2']};
    color: ${props => props.theme['yellow-900']};
  }
`

export const Content = styled.div`
  max-width: 70rem;
  margin: 1rem auto;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 6.375rem;
`

export const Box = styled.div`
  --bg-color: ${props => props.theme['brown-100']};
  background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  padding: 2.5rem;
  width: 100%;

  ul {
    width: 100%;

    display: grid;
    grid-column-gap: 2.5rem;
    grid-row-gap: 1.25rem;

    margin-bottom: 1rem;

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

  img {
    width: 100%;
  }
`
