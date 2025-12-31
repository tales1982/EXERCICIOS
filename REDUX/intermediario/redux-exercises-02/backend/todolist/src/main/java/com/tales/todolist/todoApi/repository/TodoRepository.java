package com.tales.todolist.todoApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import com.tales.todolist.todoApi.model.TodoList;

@Repository
public interface TodoRepository extends JpaRepository<TodoList, Long > {

//Procura por título
List<TodoList> findByTitle(String title);

//Verefica se exister
boolean existsByTitle(String title);

// Buscar por status
List<TodoList> findByCompleted(boolean completed);

// Buscar tarefas ativas
List<TodoList> findByActive(boolean active);

// Buscar por prioridade
List<TodoList> findByPriority(String priority);

// Buscar tarefas com data de vencimento
List<TodoList> findByDueDateBefore(LocalDateTime date);

// Combinar filtros
List<TodoList> findByActiveAndCompleted(boolean active, boolean completed);



}
