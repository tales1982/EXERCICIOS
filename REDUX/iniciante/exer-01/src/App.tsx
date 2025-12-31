import { useDispatch, useSelector } from "react-redux";
import { Section, SectionExer, Button } from "./app.styled";
import { RootState } from "./store";
import { divReducer, dobraReducer, resetReducer } from "./store/counterSlice";


function App() {

// useSelector: lê dados do estado (com tipagem!)
const count = useSelector((state: RootState)=> state.counter.value);

const dispatch = useDispatch();

const  multiplicar = () => {
  dispatch(dobraReducer())
}

const  dividir = () => {
  dispatch(divReducer())
}



  return (
    <Section>
      <h1>✅ Exercício 1 – Dobrar o Valor</h1>
      <p><strong>Objetivo:</strong> Criar uma action que multiplique o contador por 2</p>

      <div>
        <strong>Tarefas:</strong>
        <ol>
          <li>Adicione um reducer <code>double</code> em <code>counterSlice.ts</code></li>
          <li>Exporte a action e adicione um botão "Dobrar" no componente</li>
          <li>Teste se o valor dobra corretamente</li>
        </ol>
        <p><strong>Dica:</strong> <code>state.value *= 2</code></p>
      </div>
      <SectionExer>
        <span>{count}</span>
        <div>
          <Button onClick={dividir}>Metade /2</Button>
          <Button onClick={multiplicar}>Dobra *2</Button>
          <Button onClick={()=> dispatch(resetReducer())}>Resetar</Button>
        </div>
      </SectionExer>
    </Section>
  );
}

export default App;
