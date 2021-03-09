package com.intranet.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intranet.entity.Course;
import com.intranet.service.CourseService;

@RestController
@RequestMapping(path = BaseController.COURSE)
public class CourseController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CourseController.class);

	@Autowired
	private CourseService leaveInfoService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<Course> add(@RequestBody Course leaveInfoModel) {
		Course leaveInfo = null;
		try {
			leaveInfo = leaveInfoService.save(leaveInfoModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding LeaveInfo -> ", e);
		}
		return new ResponseEntity<Course>(leaveInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<Course> update(@RequestBody Course leaveInfoModel, @PathVariable Long id) {

		Optional<Course> leaveInfoOptional = leaveInfoService.findById(id);
		if (!leaveInfoOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		leaveInfoModel.setCourseId(id);
		leaveInfoService.save(leaveInfoModel);
		return new ResponseEntity<Course>(leaveInfoModel, HttpStatus.OK);
	}

	@GetMapping("/findAll")
	public ResponseEntity<List<Course>> findAll() {
		return new ResponseEntity<List<Course>>(leaveInfoService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<Course> findById(@PathVariable Long id) {
		Optional<Course> leaveInfoOptional = leaveInfoService.findById(id);

		if (!leaveInfoOptional.isPresent()) {
			return new ResponseEntity<Course>(new Course(), HttpStatus.OK);
		}
		return new ResponseEntity<Course>(leaveInfoOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<Course> deleteById(@PathVariable Long id) {
		Course leaveInfo = null;

		try {
			leaveInfoService.deleteById(id);
		} catch (Exception e) {
			LOGGER.error("Error while deleting LeaveInfo -> " + id, e);
		}
		return new ResponseEntity<Course>(leaveInfo, HttpStatus.OK);
	}

}
