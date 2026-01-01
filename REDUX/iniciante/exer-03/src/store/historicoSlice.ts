import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface historicoState {
    valor: number,
    historico: number[]
}

const initialState: historicoState = {
    valor: 0,
    historico: []
}

const historicoSlice = createSlice({
    name:'historico',
    initialState: initialState,
    reducers:{
        addNumero:(state, action) => {
            state.historico.push(state.valor)
        }
    }
})

export const { addNumero } = historicoSlice.actions
export default historicoSlice.reducer