import { createSlice, removeListener } from "@reduxjs/toolkit";

interface CartItem {
    id: number,
    name: string,
}

interface CartState {
    id: number,
    name: string,
    lista: CartItem[]
}

const initialState: CartState = {
    id: 0,
    name: "",
    lista: []
}


const cartSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.lista.push(action.payload)
        },
        remove: (state, action) => {
            state.lista = state.lista.filter(item => item.id !== action.payload.id);
        }

    }
})

/* Outro metodo para remove
remove: (state, action) => {
  state.lista = state.lista.filter(item => item.id !== action.payload.id);
} */


export const { addCart, remove } = cartSlice.actions
export default cartSlice.reducer;