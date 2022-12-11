import { combineReducers } from '@reduxjs/toolkit'
import trainingReducer from './trainingSlice'

const rootReducer = combineReducers({
  training: trainingReducer,
})

export default rootReducer
