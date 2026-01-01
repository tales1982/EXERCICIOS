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
  Input
} from "./app.styled";
import { useAppSelector, useAppDispatch } from './store'
import { addNumero } from "./store/historicoSlice";




function App() {

const dispatch = useAppDispatch()

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
        <span>{}</span>
        <div>
          <Input type="number" placeholder="Digite um valor" />
          <Button onClick={() => dispatch(addNumero())}>Adicionar</Button>
        </div>

        <div>
          <h3>Histórico de Valores:</h3>
          <ul>
            {/* Lista de histórico será exibida aqui */}
          </ul>
        </div>
      </SectionExer>
    </Section>
  );
}

export default App;
