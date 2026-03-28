package com.SpringBootRESTAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.SpringBootRESTAPI.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}