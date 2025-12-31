import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'


// Cria a store combinando todos os reducers'
export const store = configureStore({
    reducer: {
        counter: counterReducer // Adicione mais slices aqui conforme necessário
    }
})

// Tipos TypeScript derivados da store
export type RootState = ReturnType<typeof store.getState>   //Tipo do stado global
export type AppDispatch = typeof store.dispatch             // Tipo do dispatch

/*  
    RootState - infere automaticamente o tipo de todo o estado
    AppDispatch - garante type-safety ao disparar actions
*/