/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'

import { Path, UseFormRegister } from 'react-hook-form'

import * as S from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: Path<any>
  register: UseFormRegister<any>
  value: string
  label: string
  icon: JSX.Element
  actived: boolean
}

function InputRadio({
  register,
  name,
  required,
  label,
  value,
  icon,
  actived = false,
  ...rest
}: Props) {
  if (!register) return null

  return (
    <S.Container className={actived ? 'active' : ''}>
      <S.ContainerInput
        type="radio"
        id={value}
        value={value}
        {...register(name, { required })}
        {...rest}
      />
      {icon}
      <S.Label htmlFor={value}>{label}</S.Label>
    </S.Container>
  )
}

export { InputRadio }
