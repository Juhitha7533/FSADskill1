package com.example.studentapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentapp.entity.Student;
import com.example.studentapp.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public Student updateStudent(Long id, Student student) {

        Student s = repository.findById(id).get();

        s.setName(student.getName());
        s.setEmail(student.getEmail());
        s.setCourse(student.getCourse());

        return repository.save(s);
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}