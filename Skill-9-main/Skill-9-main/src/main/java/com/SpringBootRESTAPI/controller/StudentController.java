package com.SpringBootRESTAPI.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.SpringBootRESTAPI.exception.StudentNotFoundException;
import com.SpringBootRESTAPI.model.Student;
import com.SpringBootRESTAPI.repository.StudentRepository;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentRepository repo;

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Integer id){

        return repo.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException("Student not found with id " + id));
    }
}