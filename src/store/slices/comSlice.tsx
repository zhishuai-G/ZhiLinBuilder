import { createSlice } from "@reduxjs/toolkit"

const comSlice = createSlice({
  name: 'comSlice',
  initialState: {
    comList: [],
    dragCom: void 0
  },
  reducers: {
    setDragCom(state, action) {
      state.dragCom = action.payload
    }
  }
})

export const { reducer: comReducer } = comSlice

export const { setDragCom } = comSlice.actions