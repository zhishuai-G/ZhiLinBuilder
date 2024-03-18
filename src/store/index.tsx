import { configureStore } from "@reduxjs/toolkit";
import { comReducer } from './slices/comSlice'

const store = configureStore({
  reducer: {
    comReducer
  }
})

export default store