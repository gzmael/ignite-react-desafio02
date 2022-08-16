import { CoffeesGrid } from '../../components/CoffeesGrid'
import { Hero } from '../../components/Hero'
import { coffees } from '../../utils/coffees'
import * as S from './styles'

const Home = () => {
  return (
    <S.Container>
      <Hero />
      <S.Content>
        <h2>Nossos cafés</h2>
        <CoffeesGrid coffees={coffees} />
      </S.Content>
    </S.Container>
  )
}

export { Home }
