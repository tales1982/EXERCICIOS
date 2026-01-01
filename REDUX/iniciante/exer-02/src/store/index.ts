import { configureStore } from "@reduxjs/toolkit";  
import addValorReducer from './addAmount'

export const store = configureStore({
    reducer: addValorReducer
})

// Tipos TypeScript derivados da store
export type RootState = ReturnType<typeof store.getState>     // Tipo do estado global
export type AppDispatch = typeof store.dispatch                // Tipo do dispatch