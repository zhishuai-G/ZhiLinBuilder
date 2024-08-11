import { createSlice } from "@reduxjs/toolkit"

const comSlice = createSlice({
  name: 'comSlice',
  initialState: {
    comList: [],
    dragCom: void 0,
    selectCom: void 0
  },
  reducers: {
    setDragCom(state, action) {
      state.dragCom = action.payload
    },
    setComList(state, action) {
      window.rootStore = JSON.parse(JSON.stringify(action.payload))
      state.comList = action.payload
    },
    setSelectCom(state, action) {
      state.selectCom = action.payload
    }
  }
})

export const { reducer: comReducer } = comSlice

export const { setDragCom, setSelectCom, setComList } = comSlice.actions