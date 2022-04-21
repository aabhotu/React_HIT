import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import {addTodo} from './todoSlice'

export const store = configureStore({
  reducer: {
      todo: todoReducer
  },
})