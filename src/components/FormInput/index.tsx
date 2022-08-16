/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'

import { FieldError, Path, UseFormRegister } from 'react-hook-form'

import { Input } from '../Input'
import * as S from './styles'

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  name: Path<any>
  error?: FieldError
  register: UseFormRegister<any>
  helper?: string
}

function FormInput({
  name,
  error,
  label,
  register,
  type = 'text',
  helper,
  ...rest
}: FormInputProps) {
  return (
    <S.Container htmlFor={name}>
      <>
        {label && { label }}
        <Input
          type={type}
          id={name}
          name={name}
          className="form-input"
          register={register}
          {...rest}
          helper={helper}
        />
        {error && error.message && <span>{error.message}</span>}
      </>
    </S.Container>
  )
}

export { FormInput }
