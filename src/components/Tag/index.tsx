import React from 'react'

import * as S from './styles'

interface TagProps {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return <S.Container>{text}</S.Container>
}

export { Tag }
