import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//interface do estado tipagen
interface valorState {
    valor: number 
}

// stado inicial
const initialState: valorState = {
    valor : 45
}


//Cria o slice com redux toolkit
const addAmount = createSlice({
    name: 'addValor',
    initialState:initialState,
    reducers:{
        adcionarValor:(state, action: PayloadAction<number>) => {
            state.valor += action.payload
        }
    }
})

export const {adcionarValor} = addAmount.actions
export default addAmount.reducer

