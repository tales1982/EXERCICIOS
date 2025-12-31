import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define o tipo do estado do contador
interface CounterState {
    value: number
}

// Estado inicial tipado
const initialState: CounterState = {
    value: 2
}

// Cria o slice com Redux Toolkit#
const counterSlice = createSlice({
name: 'counter',                //Nome do slice
initialState: initialState,     //Estado inicial
reducers:{                      // Funções que modificam o estado
    dobraReducer:(state)=>{
        state.value *=2;
    },
    divReducer:(state)=>{
        state.value /=2;
    },
    resetReducer:(state)=>{
        state.value = 2;
    }
}
})

// Exporta as actions para usar nos componentes
export const { dobraReducer, divReducer, resetReducer} = counterSlice.actions

// Exporta o reducer para adicionar na store
export default counterSlice.reducer