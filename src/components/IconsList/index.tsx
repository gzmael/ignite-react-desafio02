import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import * as S from './styles'

interface IconsListProps {
  variant: S.IconTypes
}

const IconsList = ({ variant }: IconsListProps) => {
  return (
    <S.Container variants={variant}>
      {variant === 'cart' && <ShoppingCart size={16} weight="fill" />}
      {variant === 'package' && <Package size={16} weight="fill" />}
      {variant === 'timer' && <Timer size={16} weight="fill" />}
      {variant === 'coffee' && <Coffee size={16} weight="fill" />}
    </S.Container>
  )
}

export { IconsList }
