/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError, Path, UseFormRegister } from 'react-hook-form'
import InputMask, { Props } from 'react-input-mask'

import * as S from './styles'

type FormInputMaskProps = Props & {
  register: UseFormRegister<any>
  name: Path<any>
  error?: FieldError
}
const FormInputMask = ({
  name,
  register,
  error,
  required,
  ...rest
}: FormInputMaskProps) => {
  const { ref } = register(name)
  return (
    <S.Container htmlFor={name}>
      <>
        <InputMask
          id={name}
          {...register(name, { required })}
          {...rest}
          inputRef={ref}
        />
        {error && error.message && <span>{error.message}</span>}
      </>
    </S.Container>
  )
}

export { FormInputMask }
