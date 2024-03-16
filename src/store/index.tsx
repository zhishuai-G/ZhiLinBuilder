import { configureStore } from '@reduxjs/toolkit'

const initialState = { comList: [], dragCom: void 0 }

const comReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'changeNowCom': {
      return { ...state, dragCom: action.value }
    }
    case 'changeComList': {
      return { ...state, comList: action.value }
    }
    case 'changeSelectCom': {
      return { ...state, selectCom: action.value }
    }
    default: {
      return state
    }
  }
}

export default configureStore({
  reducer: comReducer
});
