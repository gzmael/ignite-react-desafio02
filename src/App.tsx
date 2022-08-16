import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CheckoutContextProvider } from './contexts/CheckoutContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CheckoutContextProvider>
          <Router />
        </CheckoutContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
