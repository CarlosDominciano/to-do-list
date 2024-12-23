package com.app.todo.services;

import com.app.todo.models.TaskModel;
import com.app.todo.repositories.TaskRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Transactional
    public TaskModel save(TaskModel taskModel) {
        return taskRepository.save(taskModel);
    }
    public List<TaskModel> findAll() {
        return taskRepository.findAll();
    }

}
