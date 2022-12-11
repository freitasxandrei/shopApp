import { ImageSourcePropType } from 'react-native'

export interface Training {
  id: string
  title: string
  subtitle: string
  order: number
  image: ImageSourcePropType
  uri: string
  track: number
  value: string
}
export interface TrainingItem {
  item: Training
}

export const popular: Training[] = [
  {
    id: 'ff171f80-5960-41e7-965c-1f9bcf31e02c',
    order: 1,
    title: 'TÊNIS OLD SKOOL INFANTIL BLACK TRUE WHITE',
    track: 0,
    subtitle: 'Em 1977, o tênis Old Skool, originalmente nomeado de Vans #36 foi lançado sendo o primeiro a conter a icônica sidestripe na lateral. ',
    uri: 'https://docs.google.com/uc?id=1jgzJ952yQ3gnL0K7PyPbrCxBavf7A59M',
    image: require('../assets/images/treino1.jpg'),
    value: 'R$325,00'
  },
  {
    id: 'ff171f80-5960-41e7-965c-1f9bcf31e02d',
    order: 2,
    title: 'TÊNIS OLD SKOOL BLACK BLACK',
    track: 1,
    subtitle: 'Em 1977, o tênis Old Skool, originalmente nomeado de Vans #36 foi lançado sendo o primeiro a conter a icônica sidestripe na lateral.',
    uri: 'https://docs.google.com/uc?id=1XC--M5weKJpgH_FoYHcMr7v0QnHYbvDy',
    image: require('../assets/images/treino2.jpg'),
    value: 'R$300,00'
  },
  {
    id: 'ff171f80-5960-41e7-965c-1f9bcf31e02e',
    order: 3,
    title: 'TÊNIS OLD SKOOL CHECKERBOARD WHITE BLACK',
    track: 2,
    subtitle: 'Em 1977, o tênis Old Skool, originalmente nomeado de Vans #36 foi lançado sendo o primeiro a conter a icônica sidestripe na lateral.',
    uri: 'https://docs.google.com/uc?id=1bw9Kybp8xiIgE9s7fkf03P--tNYZ2rgw',
    image: require('../assets/images/treino3.jpg'),
    value: 'R$345,00'
  },
]

export const trainings = {
  popular
}
