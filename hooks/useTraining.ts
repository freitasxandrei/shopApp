import { Training, trainings } from '../data/trainings'

export const useTraining = (id: string): Training | undefined => {
  const arr = Object.values(trainings).flat()
  const training = arr.find((m: Training) => m.id === id)
  return training
}
