import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userConstants } from '../constants'

const initialState = {
  response: [],
  data: {},
  error: '',
  errorStatus: false,
  success: false,
  loading: false
}

const deleteUserReducer = createSlice({
  name: 'deleteUserReducer',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userConstants.DELETE_USER_REQUEST, (state) => {
        state.loading = true
      })
      .addCase(userConstants.DELETE_USER_SUCCESS, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.success = true
        state.response = action.payload
      })
      .addCase(userConstants.DELETE_USER_FAILURE, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.errorStatus = true
        state.error = action.payload
      })
  },
  reducers: {
    resetDeleteState: () => initialState
  }
})

export const { resetDeleteState } = deleteUserReducer.actions

export default deleteUserReducer.reducer
