import { Coffee } from '../interfaces/coffee'

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.99,
    tags: ['tradicional'],
    image: '/coffees/expresso.png'
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.99,
    tags: ['tradicional'],
    image: '/coffees/americano.png'
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.99,
    tags: ['tradicional'],
    image: '/coffees/expresso_cremoso.png'
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.99,
    tags: ['tradicional', 'gelado'],
    image: '/coffees/gelado.png'
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.99,
    tags: ['tradicional', 'com leite'],
    image: '/coffees/leite.png'
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.99,
    tags: ['tradicional', 'com leite'],
    image: '/coffees/latte.png'
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.99,
    tags: ['tradicional', 'com leite'],
    image: '/coffees/capuccino.png'
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.99,
    tags: ['tradicional', 'com leite'],
    image: '/coffees/macchiato.png'
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.99,
    tags: ['tradicional', 'com leite'],
    image: '/coffees/mochaccino.png'
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.99,
    tags: ['especial', 'com leite'],
    image: '/coffees/chocolate.png'
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.99,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: '/coffees/cubano.png'
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.99,
    tags: ['especial'],
    image: '/coffees/havaiano.png'
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.99,
    tags: ['especial'],
    image: '/coffees/arabe.png'
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.99,
    tags: ['especial', 'alcoólico'],
    image: '/coffees/irlandes.png'
  }
]
