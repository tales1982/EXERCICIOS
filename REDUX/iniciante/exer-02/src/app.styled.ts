import styled from "styled-components";

export const Section = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background: linear-gradient(135deg, #14192cff 0%, #331f47ff 100%);
color: white;
`
export const SectionExer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
border-radius: 30px;
padding: 2rem;
width: 40%;
height: 20%;
background-color: #3e3d3fff;
color: white;

span {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

div {
  display: flex;
  gap: 1rem;
}
`

export const Button = styled.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
    background: linear-gradient(135deg, #9d6eff 0%, #7c7fff 100%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(139, 92, 246, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.4);
  }
`

export const HeaderContainer = styled.div`
  max-width: 800px;
  text-align: center;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
`

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`

export const TasksBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: left;
`

export const TasksTitle = styled.strong`
  font-size: 1.1rem;
`

export const TasksList = styled.ol`
  margin-top: 0.5rem;
  padding-left: 1.5rem;
`

export const TaskItem = styled.li`
  margin-bottom: 0.5rem;
`

export const TipBox = styled.p`
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 8px;
  border-left: 4px solid #8b5cf6;
`

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(139, 92, 246, 0.3);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  outline: none;
  width: 120px;
  text-align: center;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &:focus {
    border-color: #8b5cf6;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
  }

  /* Remove setas do input number no Chrome, Safari, Edge */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Remove setas do input number no Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`