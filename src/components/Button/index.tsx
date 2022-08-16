import { ButtonHTMLAttributes, ReactNode } from 'react'

import { BaseButton, ButtonVariant } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variants: ButtonVariant
  children: ReactNode
}

const Button = ({ variants, children, ...props }: ButtonProps) => {
  return (
    <BaseButton variant={variants} {...props}>
      {children}
    </BaseButton>
  )
}

export { Button }
