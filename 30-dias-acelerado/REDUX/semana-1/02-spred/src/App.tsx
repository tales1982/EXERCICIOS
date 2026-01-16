import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store/hooks'
import './App.css'
import { addCliente } from './store/slice/clienteSlice';

function App() {
  const dispatch = useAppDispatch();
  const selectCliente = useAppSelector((state)=> state.cliente.lista)

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    idade: ''
  });

  // Função para atualizar os dados conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para enviar os dados
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o reload da página

    // Aqui você despacha a ação com os dados do formulário
    dispatch(addCliente(formData));

    console.log('Dados enviados:', formData);

    // Limpa o formulário após enviar
    setFormData({ id: '', name: '', idade: '' });
  };

  return (
    <>
      <h1>Adicionar cliente</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='id'
          placeholder='id'
          value={formData.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder='nome'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name='idade'
          placeholder='idade'
          value={formData.idade}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {selectCliente.map((cliente)=>(
          <li key={cliente.id}>
            ID: {cliente.id} - Nome: {cliente.name} - Idade: {cliente.idade}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
