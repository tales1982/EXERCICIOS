#!/usr/bin/env bash
set -euo pipefail

APP_NAME="${1:-ex01}"

echo "==> Criando app: $APP_NAME (Vite + React + TypeScript)"
yarn create vite "$APP_NAME" --template react-ts

cd "$APP_NAME"

echo "==> Instalando dependências base"
yarn

echo "==> Instalando styled-components + types"
yarn add styled-components
yarn add -D @types/styled-components

echo "==> Instalando React Hook Form"
yarn add react-hook-form

echo "==> Instalando Redux Toolkit + React-Redux"
yarn add @reduxjs/toolkit react-redux

echo "==> Criando estrutura Redux (store + slice)"
mkdir -p src/store

cat > src/store/store.ts <<'EOF'
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
EOF

cat > src/store/counterSlice.ts <<'EOF'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    addBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => { state.value = 0; },
  },
});

export const { increment, decrement, addBy, reset } = counterSlice.actions;
export default counterSlice.reducer;
EOF

cat > src/store/hooks.ts <<'EOF'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
EOF

echo "==> Atualizando main.tsx para Redux Provider"
cat > src/main.tsx <<'EOF'
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
EOF

echo "==> Criando App.tsx com Styled-Components + Hook Form + Counter Redux"
cat > src/App.tsx <<'EOF'
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { increment, decrement, reset } from "./store/counterSlice";

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 720px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.25);
  color: white;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  opacity: 0.9;
`;

const Section = styled.div`
  margin-top: 18px;
`;

type FormValues = {
  name: string;
  email: string;
};

export default function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((s) => s.counter.value);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: { name: "", email: "" },
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    alert(`Form OK:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Page>
      <Card>
        <h1 style={{ margin: 0, color: "white" }}>Starter (TS + Redux + RHF + Styled)</h1>
        <p style={{ opacity: 0.85, color: "white" }}>
          Exemplo com contador Redux e formulário com React Hook Form.
        </p>

        <Section>
          <h2 style={{ margin: "0 0 10px", color: "white" }}>Counter (Redux)</h2>
          <Row>
            <div style={{ fontSize: 20, color: "white" }}>Valor: <b>{counter}</b></div>
            <Button type="button" onClick={() => dispatch(decrement())}>-</Button>
            <Button type="button" onClick={() => dispatch(increment())}>+</Button>
            <Button type="button" onClick={() => dispatch(reset())}>Reset</Button>
          </Row>
        </Section>

        <Section>
          <h2 style={{ margin: "0 0 10px", color: "white" }}>Form (React Hook Form)</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ marginBottom: 12 }}>
              <Label style={{ color: "white" }}>Nome</Label>
              <Input
                placeholder="Seu nome"
                {...register("name", { required: "Nome é obrigatório", minLength: { value: 2, message: "Mínimo 2 letras" } })}
              />
              {errors.name && (
                <div style={{ marginTop: 6, color: "#ffb4b4" }}>{errors.name.message}</div>
              )}
            </div>

            <div style={{ marginBottom: 12 }}>
              <Label style={{ color: "white" }}>Email</Label>
              <Input
                placeholder="voce@exemplo.com"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
                })}
              />
              {errors.email && (
                <div style={{ marginTop: 6, color: "#ffb4b4" }}>{errors.email.message}</div>
              )}
            </div>

            <Button type="submit">Enviar</Button>
          </form>
        </Section>
      </Card>
    </Page>
  );
}
EOF

echo "==> Ajustando index.css para um fundo simples"
cat > src/index.css <<'EOF'
:root {
  color-scheme: dark;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
  background: radial-gradient(1200px 800px at 10% 10%, rgba(124, 58, 237, 0.35), transparent 55%),
              radial-gradient(900px 700px at 90% 20%, rgba(59, 130, 246, 0.25), transparent 60%),
              #0b1020;
}
EOF

echo "==> Pronto. Rodar:"
echo "cd $APP_NAME && yarn dev"

