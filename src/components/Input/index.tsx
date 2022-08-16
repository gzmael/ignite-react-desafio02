/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'

import { Path, UseFormRegister } from 'react-hook-form'

import * as S from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: Path<any>
  register: UseFormRegister<any>
  helper?: string
}

function Input({
  register,
  name,
  required,
  type = 'text',
  helper,
  ...rest
}: Props) {
  if (!register) return null

  return (
    <S.Container>
      <S.ContainerInput
        type={type}
        id={name}
        {...register(name, { required })}
        {...rest}
      />
      {helper && <S.Helper>{helper}</S.Helper>}
    </S.Container>
  )
}

export { Input }
