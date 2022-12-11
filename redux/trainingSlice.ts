import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Training } from '../data/trainings'

export interface Activity {
  duration: number
}
export interface TrainingState {
  activity: {
    [key: string]: Activity
  }
  filepaths: string[]

  favourites: Training[]
}

const initialState: TrainingState = {
  activity: {},
  filepaths: [],
  favourites: [],
}

const trainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    completed(state, action: PayloadAction<number>) {
      state.activity[Date.now()] = {
        duration: action.payload,
      }
    },
    manualEntry(
      state,
      action: PayloadAction<{
        timestamp: number
        duration: number
      }>
    ) {
      const { duration, timestamp } = action.payload

      if (duration === 0) {
        delete state.activity[timestamp]
        return
      }

      state.activity[timestamp] = {
        duration,
      }
    },
    addFilePath(state, action) {
      if (!state.filepaths) {
        state.filepaths = []
      }
      state.filepaths.push(action.payload)
    },
    reset: () => initialState,
    updateFavourite: (state, action) => {
      if (!state.favourites) {
        state.favourites = []
      }
      const training = action.payload
      const trainingIndex = state.favourites.findIndex((item) => item.id === training.id)
      const trainingAlreadyFavourited = trainingIndex !== -1

      if (trainingAlreadyFavourited) {
        state.favourites.splice(trainingIndex, 1)
      } else {
        state.favourites.push(training)
      }
    },
  },
})

export const { completed, manualEntry, reset, addFilePath, updateFavourite } =
  trainingSlice.actions
export default trainingSlice.reducer
