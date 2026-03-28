package com.example.studentapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.studentapp.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}