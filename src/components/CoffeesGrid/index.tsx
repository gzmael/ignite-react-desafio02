import React from 'react'

import { Coffee } from '../../interfaces/coffee'
import { CoffeeItem } from '../CoffeeItem'
import * as S from './styles'

interface CoffeesGridProps {
  coffees: Coffee[]
}

const CoffeesGrid = ({ coffees }: CoffeesGridProps) => {
  return (
    <S.Container>
      {coffees.map(coffee => (
        <CoffeeItem coffee={coffee} key={coffee.id} />
      ))}
    </S.Container>
  )
}

export { CoffeesGrid }
