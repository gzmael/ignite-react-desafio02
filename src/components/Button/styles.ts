import styled from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'icon'
  | 'small'
  | 'cart'
  | 'location'
  | 'buy'

const paddingSmall = '0 0.5rem'
const paddingDefault = '0.5rem'

const paddingVariants = {
  primary: '0.75rem 0.5rem',
  icon: paddingDefault,
  small: paddingSmall,
  cart: paddingDefault,
  buy: paddingDefault,
  location: paddingDefault
} as const

const colorVariants = {
  primary: 'white',
  icon: 'white',
  small: 'brown-800',
  cart: 'yellow-900',
  buy: 'white',
  location: 'purple-500'
} as const

const backgroundVariants = {
  primary: {
    default: 'yellow-500',
    hover: 'yellow-900'
  },
  icon: {
    default: 'purple-500',
    hover: 'purple-900'
  },
  small: {
    default: 'brown-400',
    hover: 'brown-500'
  },
  cart: {
    default: 'yellow-100',
    hover: 'yellow-100'
  },
  buy: {
    default: 'purple-500',
    hover: 'purple-900'
  },
  location: {
    default: 'purple-100',
    hover: 'purple-100'
  }
} as const

const fontVariants = {
  primary: '700 0.875rem/1.375rem Roboto, sans-serif',
  icon: '400 0.75rem/1.1875rem Roboto, sans-serif',
  small: '400 0.75rem/1.1875rem Roboto, sans-serif',
  cart: '400 0.75rem/1.1875rem Roboto, sans-serif',
  buy: '400 0.75rem/1.1875rem Roboto, sans-serif',
  location: '400 0.875rem/1.125rem Roboto, sans-serif'
}

interface ButtonProps {
  variant: ButtonVariant
}

export const BaseButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  cursor: pointer;

  transition: background, color ease 0.3s;
  text-transform: uppercase;
  border-radius: 6px;

  padding: ${props => paddingVariants[props.variant]};

  background: ${props =>
    props.theme[backgroundVariants[props.variant].default]};
  color: ${props => props.theme[colorVariants[props.variant]]};

  font: ${props => fontVariants[props.variant]};

  &:hover {
    background: ${props =>
      props.theme[backgroundVariants[props.variant].hover]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  span {
    background: ${props => props.theme['yellow-900']};
    color: ${props => props.theme.white};
    font-weight: bold;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
