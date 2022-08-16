import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
  *,
  ::before,
  ::after {
    border-width: 0;
    border-style: solid;
  }
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  :focus {
    outline: none;
  }
  
  body {
    background: ${props => props.theme['brown-100']};
    color: ${props => props.theme['brown-700']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .container {
    max-width: 70rem;
    margin: 0 auto;
  }

  button:hover, input:hover, textarea:hover {
    outline: none;
  }
  button:focus {
    outline: none;
  }
`
