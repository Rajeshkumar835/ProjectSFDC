package com.intranet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intranet.entity.FavouriteCourse;
import com.intranet.service.FavouriteCourseService;

@RestController
@RequestMapping(path = BaseController.FAVOURITE_COURSE)
public class FavouriteCourseController {

	@Autowired
	private FavouriteCourseService favouriteCourseService;

	public ResponseEntity<FavouriteCourse> add(@RequestBody FavouriteCourse favouriteCourseObj) {
		FavouriteCourse fav = favouriteCourseService.save(favouriteCourseObj);
		return new ResponseEntity<FavouriteCourse>(fav, HttpStatus.OK);

	}
	
//	public ResponseEntity<FavouriteCourse> findAll() {
//		return new ResponseEntity<FavouriteCourse>(favouriteCourseService.findAll(), HttpStatus.OK);
//
//	}

}
