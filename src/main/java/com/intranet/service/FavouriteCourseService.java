package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.FavouriteCourse;

public interface FavouriteCourseService {

	
	public FavouriteCourse save(FavouriteCourse favourite_course);
	
	public List< FavouriteCourse> findAll();
	
	public Optional<FavouriteCourse> findByCourseCode(String code);
	
	public List<FavouriteCourse> findByEmployeeCode(String code);
}
