import { configureStore } from "@reduxjs/toolkit";
import historicoReducer from './historicoSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'


export const store = configureStore({
    reducer:{
        historico:historicoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>     // Tipo do estado global
export type AppDispatch = typeof store.dispatch

// Hooks tipados para usar em vez dos hooks padrão
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector