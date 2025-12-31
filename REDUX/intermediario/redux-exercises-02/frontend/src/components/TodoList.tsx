import styled from 'styled-components';
import { useForm } from '../hooks/useForm';
import { useAppDispatch } from '../store/hooks';
import { sendToApi } from '../store/slices/todosSlice';

interface TodoFormData {
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate: string;
  completed: boolean;
  active: boolean;
}

const TodoList = () => {
  const dispatch = useAppDispatch();
  const initialFormValues: TodoFormData = {
    title: '',
    description: '',
    priority: 'LOW',
    dueDate: '',
    completed: false,
    active: true,
  };

  const { register, registerCheckbox, handleSubmit, reset } = useForm<TodoFormData>(initialFormValues);

  const onSubmit = (formData: TodoFormData) => {
    console.log('Form submitted:', formData);
    dispatch(sendToApi(formData));
    reset();
  };

  return (
    <Container>
      <Header>
        <Title>Lista de Tarefas</Title>
        <Stats>
          <Stat>
            <StatLabel>Total:</StatLabel>
            <StatValue>0</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Ativas:</StatLabel>
            <StatValue className="active">0</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Concluídas:</StatLabel>
            <StatValue className="done">0</StatValue>
          </Stat>
        </Stats>
      </Header>

      <AddTodoForm onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Título:</Label>
          <Input
            type="text"
            placeholder="Digite o título da tarefa..."
            {...register('title')}
          />
        </FormGroup>

        <FormGroup>
          <Label>Descrição:</Label>
          <TextArea
            placeholder="Digite a descrição da tarefa..."
            rows={3}
            {...register('description')}
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label>Prioridade:</Label>
            <Select {...register('priority')}>
              <option value="LOW">Baixa</option>
              <option value="MEDIUM">Média</option>
              <option value="HIGH">Alta</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Data de Vencimento:</Label>
            <Input
              type="datetime-local"
              {...register('dueDate')}
            />
          </FormGroup>
        </FormRow>

        <FormRow>
          <CheckboxGroup>
            <CheckboxInput
              type="checkbox"
              id="completed"
              {...registerCheckbox('completed')}
            />
            <CheckboxLabel htmlFor="completed">Concluída</CheckboxLabel>
          </CheckboxGroup>

          <CheckboxGroup>
            <CheckboxInput
              type="checkbox"
              id="active"
              {...registerCheckbox('active')}
            />
            <CheckboxLabel htmlFor="active">Ativa</CheckboxLabel>
          </CheckboxGroup>
        </FormRow>

        <AddButton type="submit">Adicionar</AddButton>
      </AddTodoForm>

      <FilterButtons>
        <FilterButton active={true}>
          Todas
        </FilterButton>
        <FilterButton active={false}>
          Ativas
        </FilterButton>
        <FilterButton active={false}>
          Concluídas
        </FilterButton>
      </FilterButtons>

      <TodoListContainer>
        <TodoItem done={false}>
          <Checkbox type="checkbox" />
          <TodoContent>
            <TodoTitle done={false}>Exemplo de tarefa ativa</TodoTitle>
            <TodoDate>26/12/2025, 10:30</TodoDate>
          </TodoContent>
          <Actions>
            <EditActionButton>Editar</EditActionButton>
            <RemoveButton>Remover</RemoveButton>
          </Actions>
        </TodoItem>

        <TodoItem done={true}>
          <Checkbox type="checkbox" defaultChecked />
          <TodoContent>
            <TodoTitle done={true}>Exemplo de tarefa concluída</TodoTitle>
            <TodoDate>25/12/2025, 15:45</TodoDate>
          </TodoContent>
          <Actions>
            <EditActionButton>Editar</EditActionButton>
            <RemoveButton>Remover</RemoveButton>
          </Actions>
        </TodoItem>

        <TodoItem done={false}>
          <EditContainer>
            <EditInput
              type="text"
              defaultValue="Exemplo de tarefa em edição"
            />
            <EditButton>Salvar</EditButton>
            <CancelButton>Cancelar</CancelButton>
          </EditContainer>
        </TodoItem>
      </TodoListContainer>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatLabel = styled.span`
  font-weight: 500;
  color: #666;
`;

const StatValue = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  color: #333;

  &.active {
    color: #2196f3;
  }

  &.done {
    color: #4caf50;
  }
`;

const AddTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2196f3;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  resize: vertical;
  font-family: inherit;

  &:focus {
    border-color: #2196f3;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
  background: white;
  cursor: pointer;

  &:focus {
    border-color: #2196f3;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #2196f3;
`;

const CheckboxLabel = styled.label`
  font-size: 0.95rem;
  color: #333;
  cursor: pointer;
`;

const AddButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: #2196f3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #1976d2;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => (props.active ? 'white' : '#666')};
  background: ${(props) => (props.active ? '#2196f3' : '#f5f5f5')};
  border: 2px solid ${(props) => (props.active ? '#2196f3' : '#ddd')};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${(props) => (props.active ? '#1976d2' : '#e0e0e0')};
    border-color: ${(props) => (props.active ? '#1976d2' : '#bbb')};
  }
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TodoItem = styled.div<{ done: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border: 2px solid ${(props) => (props.done ? '#4caf50' : '#ddd')};
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #4caf50;
`;

const TodoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TodoTitle = styled.span<{ done: boolean }>`
  font-size: 1.1rem;
  color: ${(props) => (props.done ? '#999' : '#333')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
`;

const TodoDate = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EditActionButton = styled.button`
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  color: #2196f3;
  background: #e3f2fd;
  border: 1px solid #2196f3;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #2196f3;
    color: white;
  }
`;

const RemoveButton = styled.button`
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  color: #f44336;
  background: #ffebee;
  border: 1px solid #f44336;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #f44336;
    color: white;
  }
`;

const EditContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const EditInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #2196f3;
  border-radius: 6px;
  outline: none;
`;

const EditButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: white;
  background: #4caf50;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #45a049;
  }
`;

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #666;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e0e0e0;
  }
`;
