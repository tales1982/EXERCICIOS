import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getValueCounter } from "./store/counterSlice";
import { increment, decrement, erase, inclementByPar } from "./store/counterSlice"
import { useState } from "react";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: #e8ecf8;
  font-family: "Space Grotesk", "Inter", system-ui, -apple-system, sans-serif;
`;

const Frame = styled.div`
  width: min(640px, 100%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  backdrop-filter: blur(8px);
  align-items: stretch;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(28px, 4vw, 36px);
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, #a5b4fc, #7dd3fc);
  -webkit-background-clip: text;
  color: transparent;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: clamp(20px, 4vw, 32px);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
  display: grid;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const CounterValue = styled.div`
  font-size: clamp(48px, 8vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  text-shadow: 0 6px 40px rgba(89, 200, 255, 0.45);
`;

const Label = styled.p`
  margin: 0;
  color: rgba(232, 236, 248, 0.75);
  font-size: 15px;
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  margin: 0;
`;

const InputArea = styled.div`
  display: grid;
  gap: 10px;
  padding: 14px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(12, 14, 26, 0.7);
  color: #e8ecf8;
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 15px;
  outline: none;
  transition: border-color 140ms ease, box-shadow 140ms ease, transform 140ms ease;

  &:focus {
    border-color: #67e8f9;
    box-shadow: 0 0 0 3px rgba(103, 232, 249, 0.18);
    transform: translateY(-1px);
  }
`;

const Muted = styled.span`
  color: rgba(232, 236, 248, 0.65);
  font-size: 13px;
`;

const Button = styled.button`
  border: 0;
  border-radius: 14px;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 600;
  color: #0c0e1a;
  width: 100%;
  min-width: 0;
  background: linear-gradient(135deg, #a5b4fc, #67e8f9);
  box-shadow: 0 12px 35px rgba(103, 232, 249, 0.35);
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 180ms ease, filter 180ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(103, 232, 249, 0.45);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(0.95);
  }

  &.ghost {
    background: rgba(255, 255, 255, 0.08);
    color: #e8ecf8;
    box-shadow: none;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(232, 236, 248, 0.7);
  font-size: 13px;
  width: fit-content;
`;

export default function App() {
  const dispatch = useAppDispatch();
  const selectorValue = useAppSelector(getValueCounter)
  const [valorInput, setValorInput] = useState(0)



  const inclementValue = () => { dispatch(increment()); }
  const declementValue = () => { dispatch(decrement()); }
  const cleanValue = () => { dispatch(erase()) }
  const inclementByParametre = () => {
    dispatch(inclementByPar(valorInput));
  }


  return (
    <Page>
      <Frame>
        <Tag>Redux / Contador</Tag>
        <Title>Contador elegante</Title>
        <Card>
          <Label>Valor atual</Label>
          <CounterValue>{selectorValue}</CounterValue>
          <Controls>
            <Button onClick={inclementValue}>+1</Button>
            <Button onClick={declementValue}>-1</Button>

            <Button className="ghost" onClick={cleanValue}>Resetar</Button>
          </Controls>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              inclementByParametre();
            }}
          >
            <InputArea>
              <Label>Some um valor personalizado</Label>
              <Input
                type="number"
                value={valorInput}
                onChange={(e) => setValorInput(Number(e.target.value || 0))}
                placeholder="Ex.: 5"
              />
              <Button type="submit">Aplicar</Button>
              <Muted>Dica: use números negativos para subtrair de uma vez.</Muted>
            </InputArea>
          </Form>
        </Card>
      </Frame>
    </Page>
  );
}
