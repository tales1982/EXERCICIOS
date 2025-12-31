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
