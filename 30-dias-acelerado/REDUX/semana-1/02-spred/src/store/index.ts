import { configureStore } from "@reduxjs/toolkit";
import addCliente  from "./slice/clienteSlice";

export const store = configureStore({
    reducer:{
        cliente: addCliente
    }
})

// Tipo do estado completo da aplicação
// Inferido automaticamente a partir da store
export type RootState = ReturnType<typeof store.getState>;

// Tipo do dispatch
// Necessário para ações assíncronas (thunks)
export type AppDispatch = typeof store.dispatch;