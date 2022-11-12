import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userConstants } from '../constants'

const initialState = {
  data: [],
  error: '',
  errorStatus: false,
  success: false,
  loading: false
}

const getUserReducer = createSlice({
  name: 'getUserReducer',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userConstants.GET_USER_REQUEST, (state) => {
        state.loading = true
      })
      .addCase(userConstants.GET_USER_SUCCESS, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.success = true
        state.error = ''
        state.errorStatus = false
        state.data = action.payload
      })
      .addCase(userConstants.GET_USER_FAILURE, (state, action: PayloadAction<any>) => {
        state.loading = false
        state.errorStatus = true
        state.data = []
        state.error = action.payload
      })
  },
  reducers: {
    resetUserState: () => initialState
  }
})

export const { resetUserState } = getUserReducer.actions

export default getUserReducer.reducer
