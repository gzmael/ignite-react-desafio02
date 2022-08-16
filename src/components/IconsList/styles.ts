import styled from 'styled-components'

export type IconTypes = 'cart' | 'package' | 'timer' | 'coffee'

const colorVariants = {
  cart: 'yellow-900',
  package: 'brown-900',
  timer: 'yellow-500',
  coffee: 'purple-500'
} as const

interface IconListProps {
  variants: IconTypes
}

export const Container = styled.span<IconListProps>`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme[colorVariants[props.variants]]};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
`
