import { useState } from "react";
import {
  Button,
  Section,
  SectionExer,
  HeaderContainer,
  Title,
  Description,
  TasksBox,
  TasksTitle,
  TasksList,
  TaskItem,
  TipBox,
  Input,
  HistoricoContainer
} from "./app.styled";
import { useAppSelector, useAppDispatch } from './store'
import { addNumero } from "./store/historicoSlice";




function App() {
  const [valor, setValor] = useState('');
  const dispatch = useAppDispatch();
  const historico = useAppSelector((state) => state.historico.historico)



  return (
    <Section>
      <HeaderContainer>
        <Title>
          ✅ Exercício 3 – Histórico de Valores
        </Title>
        <Description>
          <strong>Objetivo:</strong> Guardar todos os valores que o contador já teve
        </Description>

        <TasksBox>
          <TasksTitle>Tarefas:</TasksTitle>
          <TasksList>
            <TaskItem>Adicione history: number[] no initialState</TaskItem>
            <TaskItem>Em cada reducer, adicione state.history.push(state.value)</TaskItem>
            <TaskItem>Mostre a lista de histórico usando .map()</TaskItem>
            <TaskItem>Estilize com styled-components</TaskItem>
          </TasksList>
          <TipBox>
            <strong>Dica TypeScript:</strong> interface CounterState &#123; value: number; history: number[] &#125;
          </TipBox>
        </TasksBox>
      </HeaderContainer>

      <SectionExer>
        <div>
          <Input type="number" placeholder="Digite um valor" value={valor} onChange={(e) => setValor(e.target.value)} />
          <Button onClick={() => {
            dispatch(addNumero(Number(valor)));
            setValor('');
          }}>Adicionar</Button>
        </div>

        <HistoricoContainer>
          <h3>Histórico de Valores:</h3>
          <ul>
            {historico.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </HistoricoContainer>
      </SectionExer>
    </Section>
  );
}

export default App;
