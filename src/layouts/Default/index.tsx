import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'
import * as S from './styles'

const Default = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  )
}

export { Default }
