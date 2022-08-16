import coffeImage from '../../assets/coffee.png'
import { IconsList } from '../IconsList'
import * as S from './styles'

const Hero = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Texts>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ul>
            <li>
              <IconsList variant="cart" />
              Compra simples e segura
            </li>
            <li>
              <IconsList variant="package" />
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconsList variant="timer" /> Entrega rápida e rastreada
            </li>
            <li>
              <IconsList variant="coffee" />O café chega fresquinho até você
            </li>
          </ul>
        </S.Texts>
        <div>
          <img src={coffeImage} alt="Café" />
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export { Hero }
