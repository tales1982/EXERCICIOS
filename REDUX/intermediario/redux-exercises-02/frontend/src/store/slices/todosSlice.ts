import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type Level = 'LOW' | 'MEDIUM' | 'HIGH';

interface ITodo {
  title: string,
  description: string,
  priority: Level,
  dueDate: string,
  completed: boolean,
  active: boolean
}

interface TodoState {
  myDateTodo: ITodo | null,
  Lista: ITodo[],
  loading: boolean,
  error: string | null,
  success: boolean
}

const initialState: TodoState = {
  myDateTodo: {
    title: "",
    description: "",
    priority: 'MEDIUM',
    dueDate: "",
    completed: false,
    active: true
  },
  Lista: [],
  loading: false,
  error: null,
  success: false
}

const API_URL = "http://localhost:8080/api/todos";

//ADCIONA USUARIO POST
export const sendToApi = createAsyncThunk<
  ITodo,
  ITodo,
  { rejectValue: string }
>(
  "todo/sendToApi",
  async (dados, thunkAPI) => {
    try {
      console.log('Enviando dados para API:', dados);
      console.log('URL:', API_URL);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dados)
      });

      console.log('Status da resposta:', res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Erro na resposta:', errorText);
        throw new Error(`Erro ao salvar na API: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      console.log('Dados salvos com sucesso:', data);
      return data;
    } catch (error: any) {
      console.error('Erro capturado:', error.message);
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

const formDataSlice = createSlice({
  name: "slice-form",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(sendToApi.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendToApi.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.myDateTodo = action.payload;
      })
      .addCase(sendToApi.rejected, (state, action) => {
        state.loading = false;
        state.success = false;

        state.error =
          (action.payload as string) ??
          action.error.message ??
          "Erro desconhecido, tente novamente mais tarde";
      })
  },
})

export default formDataSlice.reducer;
