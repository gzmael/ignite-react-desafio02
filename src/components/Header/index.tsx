import { useContext } from 'react'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { CheckoutContext } from '../../contexts/CheckoutContext'
import { Button } from '../Button'
import * as S from './styles'

const Header = () => {
  const { orders, isFinished } = useContext(CheckoutContext)
  return (
    <S.Wrapper>
      <S.Container className="container">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <S.Nav>
          <Button variants="location" type="button">
            <MapPin size={22} weight="fill" />
            Várzea Alegre, CE
          </Button>
          {isFinished ? (
            <NavLink to="/success">
              <Button variants="cart" type="button">
                <ShoppingCart size={22} weight="fill" />
                {orders && orders.length > 0 && <span>{orders.length}</span>}
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/checkout">
              <Button variants="cart" type="button">
                <ShoppingCart size={22} weight="fill" />
                {orders && orders.length > 0 && <span>{orders.length}</span>}
              </Button>
            </NavLink>
          )}
        </S.Nav>
      </S.Container>
    </S.Wrapper>
  )
}

export { Header }
