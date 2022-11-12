import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    success: false,
    loading: false,
    btnText: '',
    addUser: false,
    btnActionFn: () => {},
}

const modalDataReducer = createSlice({
  name: 'modalDataReducer',
  initialState,
  reducers: {
    resetUserState: () => initialState,
    setModalData: (state, action) => {
        state.title = action.payload.title
        state.btnText = action.payload.btnText
        state.btnActionFn = action.payload.btnActionFn
        state.addUser = action.payload.addUser
        },
  }
})

export const { resetUserState, setModalData } = modalDataReducer.actions

export default modalDataReducer.reducer
