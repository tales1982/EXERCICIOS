package com.tales.todolist.todoApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tales.todolist.todoApi.model.TodoList;
import com.tales.todolist.todoApi.service.TodoService;

import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    // Listar todas as tarefas
    @GetMapping
    public ResponseEntity<List<TodoList>> listarTodas() {
        List<TodoList> tarefas = todoService.listaTodos();
        return ResponseEntity.ok(tarefas);
    }

    // Buscar tarefa por ID
    @GetMapping("/{id}")
    public ResponseEntity<TodoList> buscarPorId(@PathVariable Long id) {
        TodoList tarefa = todoService.buscarPorId(id);
        return ResponseEntity.ok(tarefa);
    }

    // Criar nova tarefa
    @PostMapping
    public ResponseEntity<TodoList> criarTarefa(@Valid @RequestBody TodoList tarefa) {
        TodoList novaTarefa = todoService.criarTarefa(tarefa);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaTarefa);
    }

    // Marcar tarefa como concluída
    @PutMapping("/{id}/concluir")
    public ResponseEntity<TodoList> concluirTarefa(@PathVariable Long id) {
        TodoList tarefa = todoService.marcarComoConcluida(id);
        return ResponseEntity.ok(tarefa);
    }

    // Atualizar tarefa
    @PutMapping("/{id}")
    public ResponseEntity<TodoList> atualizarTarefa(@PathVariable Long id, @RequestBody TodoList tarefa) {
        TodoList tarefaAtualizada = todoService.atualizarTarefa(id, tarefa);
        return ResponseEntity.ok(tarefaAtualizada);
    }

    // Deletar tarefa (soft delete)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarTarefa(@PathVariable Long id) {
        todoService.deletarTarefa(id);
        return ResponseEntity.noContent().build();
    }

    // Listar tarefas pendentes
    @GetMapping("/pendentes")
    public ResponseEntity<List<TodoList>> listarPendentes() {
        List<TodoList> tarefas = todoService.listarPendentes();
        return ResponseEntity.ok(tarefas);
    }

    // Listar tarefas concluídas
    @GetMapping("/concluidas")
    public ResponseEntity<List<TodoList>> listarConcluidas() {
        List<TodoList> tarefas = todoService.listarConcluidas();
        return ResponseEntity.ok(tarefas);
    }

}
