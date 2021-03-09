package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.Course;
import com.intranet.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository addressInfoRepository;

	@Override
	public List<Course> findAll() {
		return addressInfoRepository.findAll();
	}

	@Override
	public Course save(Course addressInfo) {
		return addressInfoRepository.save(addressInfo);
	}

	@Override
	public Optional<Course> findById(Long id) {
		return addressInfoRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		addressInfoRepository.deleteById(id);
	}

}
