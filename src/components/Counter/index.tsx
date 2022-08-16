import { Minus, Plus } from 'phosphor-react'

import * as S from './styles'

interface CounterProps {
  onPlus: () => void
  onMinus: () => void
  counter: number
}

const Counter = ({ counter = 1, onPlus, onMinus }: CounterProps) => {
  return (
    <S.Container>
      <button type="button" onClick={() => onMinus()} title="Remover Mais Um">
        <Minus size={14} weight="bold" />
      </button>
      <span>{counter}</span>
      <button type="button" onClick={() => onPlus()} title="Adicionar Mais Um">
        <Plus size={14} weight="bold" />
      </button>
    </S.Container>
  )
}

export { Counter }
