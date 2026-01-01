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
  Input
} from "./app.styled";
import { useSelector, useDispatch } from 'react-redux'
import { adcionarValor } from "./store/addAmount";
import { RootState } from "./store";

function App() {
  const [valor, setValor] = useState('');
  const valorInput = useSelector((state: RootState) => state.valor)
  const dispatch = useDispatch();

  function pegarValor(){
    dispatch(adcionarValor(Number(valor)));
  }
  

  return (
    <Section>
      <HeaderContainer>
        <Title>
          ✅ Exercício 2 – Somar Valor Customizado
        </Title>
        <Description>
          <strong>Objetivo:</strong> Permitir que o usuário some um valor específico
        </Description>

        <TasksBox>
          <TasksTitle>Tarefas:</TasksTitle>
          <TasksList>
            <TaskItem>Use a action addAmount que já está no código acima</TaskItem>
            <TaskItem>Crie um input type="number" com useState</TaskItem>
            <TaskItem>Adicione um botão que dispatche addAmount(valor)</TaskItem>
            <TaskItem>Use PayloadAction&lt;number&gt; para tipagem do TypeScript</TaskItem>
          </TasksList>
          <TipBox>
            <strong>Dica:</strong> dispatch(addAmount(Number(inputValue)))
          </TipBox>
        </TasksBox>
      </HeaderContainer>

      <SectionExer>
        <span>{valorInput}</span>
        <div>
          <Input type="text"  placeholder="Digite um valor" onChange={(e)=> setValor(e.target.value)}/>
          <Button onClick={pegarValor}>Adicionar</Button>
        </div>
      </SectionExer>
    </Section>
  );
}

export default App;
