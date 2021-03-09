package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.Course;

public interface CourseService {

	public List<Course> findAll();

	public Course save(Course addressInfo);

	public Optional<Course> findById(Long id);

	public void deleteById(Long id);

}
