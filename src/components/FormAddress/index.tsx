import { useFormContext } from 'react-hook-form'

import { apiCorreios } from '../../services/apiCorreios'
import { SubmitCheckoutType } from '../../validations/checkout'
import { FormInput } from '../FormInput'
import { FormInputMask } from '../FormInputMask'
import * as S from './styles'

const FormAddress = () => {
  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext<Omit<SubmitCheckoutType, 'payment_type'>>()

  const handleCEPChange = async (value: string) => {
    const cepFormmated = value.replace(/\D/g, '')
    if (cepFormmated.length === 8) {
      const response = await apiCorreios.get(`${cepFormmated}/json`)
      if (response.data) {
        const { localidade, uf, bairro, logradouro } = response.data
        setValue('city', localidade)
        setValue('address', logradouro)
        setValue('state', uf)
        setValue('neighborhood', bairro)
      }
    }
  }

  return (
    <S.FormAddressContainer>
      <FormInputMask
        register={register}
        name="code"
        mask={'99999-999'}
        error={errors.code}
        placeholder="CEP"
        onChange={e => handleCEPChange(e.target.value)}
      />
      <div className="cols-1">
        <FormInput
          error={errors.address}
          name="address"
          register={register}
          placeholder="Rua"
          className="block"
        />
      </div>
      <div className="cols-2">
        <FormInput
          error={errors.number}
          name="number"
          register={register}
          placeholder="Número"
        />
        <FormInput
          error={errors.complement}
          name="complement"
          register={register}
          placeholder="Complemento"
          helper="Opcional"
        />
      </div>
      <div className="cols-3">
        <FormInput
          error={errors.neighborhood}
          name="neighborhood"
          register={register}
          placeholder="Bairro"
        />
        <FormInput
          error={errors.city}
          name="city"
          register={register}
          placeholder="Cidade"
          readOnly
        />
        <FormInput
          error={errors.state}
          name="state"
          register={register}
          placeholder="UF"
          readOnly
        />
      </div>
    </S.FormAddressContainer>
  )
}

export { FormAddress }
