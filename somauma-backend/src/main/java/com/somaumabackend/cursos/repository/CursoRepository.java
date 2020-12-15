package com.somaumabackend.cursos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.somaumabackend.cursos.model.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
	public List<Curso> findAllByTitleContainingIgnoreCase(String title);
}
