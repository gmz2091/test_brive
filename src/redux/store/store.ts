import { configureStore } from '@reduxjs/toolkit'
import { createUserReducer, deleteUserReducer, getUserReducer, modalDataReducer } from '../reducers';

export const store = configureStore({
  reducer: {
    createUserReducer: createUserReducer,
    deleteUserReducer: deleteUserReducer,
    getUserReducer: getUserReducer,
    modalDataReducer: modalDataReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;