package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.FavouriteCourse;
import com.intranet.repository.FavouriteCourseRepository;

@Service
public class FavouriteCourseServiceImpl implements FavouriteCourseService {
	
	@Autowired	
	private FavouriteCourseRepository favouriteCourseRepository;
	
	@Override
	public FavouriteCourse save(FavouriteCourse favouriteCourse) {

		return favouriteCourseRepository.save(favouriteCourse);
	}

	@Override
	public List<FavouriteCourse> findAll() {
		
		return favouriteCourseRepository.findAll();
	}

	@Override
	public Optional<FavouriteCourse> findByCourseCode(String code) {
		
		return favouriteCourseRepository.findByCode(code);
	}

	@Override
	public List<FavouriteCourse> findByEmployeeCode(String code) {
		
		 return favouriteCourseRepository.getAllFavouriteCourseByEmpCode(code);
	}

}
