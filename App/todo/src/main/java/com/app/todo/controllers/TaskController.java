package com.app.todo.controllers;

import com.app.todo.models.TaskModel;
import com.app.todo.repositories.TaskRepository;
import com.app.todo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping
    public ResponseEntity<List<TaskModel>> getAllTasks() {
        List<TaskModel> listTasks = taskService.findAll();
        if (listTasks.isEmpty())
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        return ResponseEntity.status(HttpStatus.OK).body(listTasks);
    }

    @PostMapping
    public ResponseEntity<TaskModel> createTask(@RequestBody TaskModel task) {
        TaskModel taskModel = taskService.save(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskModel);
    }

}
