import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Usuario {
    id:string;
    name: string;
    idade: string;
}

interface UsuarioState {
    lista: Usuario[];
    loading:boolean;
    error: string | null;
}

const initialState: UsuarioState = {
    lista: [],
    loading: false,
    error: null
}

const clienteSlice = createSlice({
    name: 'cliente',
    initialState,
    reducers:{
        addCliente:(state, action: PayloadAction<Usuario>) => {
            state.lista = [...state.lista, action.payload]
        }
    }
})


export default clienteSlice.reducer
export const {addCliente} = clienteSlice.actions
