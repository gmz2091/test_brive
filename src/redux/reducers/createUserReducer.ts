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

const createUserReducer = createSlice({
  name: 'createUserReducer',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userConstants.CREATE_USER_REQUEST, (state) => {
        state.loading = true
      })
      .addCase(userConstants.CREATE_USER_SUCCESS, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.success = true
        state.response = action.payload
      })
      .addCase(userConstants.CREATE_USER_FAILURE, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.errorStatus = true
        state.error = action.payload
      })
  },
  reducers: {
    resetCreateState: () => initialState
  }
})

export const { resetCreateState } = createUserReducer.actions

export default createUserReducer.reducer
