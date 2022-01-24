import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { countryAPI } from './../services/country'

export const store = configureStore({
  reducer: {
    [countryAPI.reducerPath]: countryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryAPI.middleware),
})

setupListeners(store.dispatch)
