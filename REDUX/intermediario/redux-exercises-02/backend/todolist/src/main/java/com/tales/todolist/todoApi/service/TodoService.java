package com.tales.todolist.todoApi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tales.todolist.todoApi.repository.TodoRepository;
import java.util.List;
import com.tales.todolist.todoApi.model.TodoList;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    // Lista todas as tarefas
    public List<TodoList> listaTodos() {
        return todoRepository.findAll();
    }

    // Buscar por ID
    public TodoList buscarPorId(Long id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado com id: " + id));
    }

    // Buscar por título de tarefas
    public List<TodoList> buscarPorTitulo(String title) {
        List<TodoList> tarefas = todoRepository.findByTitle(title);
        if (tarefas.isEmpty())
            throw new RuntimeException("Tarefa nao encontrada..");
        return tarefas;
    }

    // Criar a tarefa
    public TodoList criarTarefa(TodoList tarefa) {
        // Verifica se já existe uma tarefa com o mesmo título
        if (todoRepository.existsByTitle(tarefa.getTitle())) {
            throw new RuntimeException("Já existe uma tarefa com esse título");
        }

        return todoRepository.save(tarefa);
    }

    // Marcar como concluída
    public TodoList marcarComoConcluida(Long id) {
        TodoList tarefa = buscarPorId(id);
        tarefa.setCompleted(true);
        return todoRepository.save(tarefa);
    }

    // Atualizar tarefa
    public TodoList atualizarTarefa(Long id, TodoList dadosAtualizados) {
        TodoList tarefa = buscarPorId(id);
        tarefa.setTitle(dadosAtualizados.getTitle());
        tarefa.setDescription(dadosAtualizados.getDescription());
        tarefa.setPriority(dadosAtualizados.getPriority());
        return todoRepository.save(tarefa);
    }

    // Deletar (soft delete)
    public void deletarTarefa(Long id) {
        TodoList tarefa = buscarPorId(id);
        tarefa.setActive(false);
        todoRepository.save(tarefa);
    }

    // Listar tarefas pendentes
    public List<TodoList> listarPendentes() {
        return todoRepository.findByActiveAndCompleted(true, false);
    }

    // Listar tarefas concluídas
    public List<TodoList> listarConcluidas() {
        return todoRepository.findByActiveAndCompleted(true, true);
    }

}
