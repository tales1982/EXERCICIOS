package com.tales.todolist.todoApi.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*** Configuracao para criar a tabela no banco ***/
@Entity
@Table(name = "TODO_LIST")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "The title cannot be empty")
    @Column(name = "TITLE", nullable = false)
    private String title;

    @CreationTimestamp
    @Column(name = "CREATED_AT", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "ACTIVE", nullable = false)
    private boolean active = true;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "COMPLETED", nullable = false)
    private boolean completed = false;

    @Column(name = "PRIORITY")
    private String priority;

    @Column(name = "DUE_DATE")
    private LocalDateTime dueDate;

}
