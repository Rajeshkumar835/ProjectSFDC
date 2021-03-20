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

import com.intranet.dto.HolidayTypeDTO;
import com.intranet.entity.HolidayType;
import com.intranet.service.HolidayTypeService;

@RestController
@RequestMapping(path = BaseController.HOLIDAY_TYPE)
public class HolidayTypeController {

	private static final Logger LOGGER = LoggerFactory.getLogger(HolidayTypeController.class);

	@Autowired
	private HolidayTypeService holidayTypeService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<HolidayType> add(@RequestBody HolidayTypeDTO holidayTypeModel) {
		HolidayType holidayType = null;
		try {
			holidayType = holidayTypeService.add(holidayTypeModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding HolidayType -> ", e);
		}
		return new ResponseEntity<HolidayType>(holidayType, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<HolidayType> update(@RequestBody HolidayType holidayTypeModel, @PathVariable Long id) {

		Optional<HolidayType> holidayTypeOptional = holidayTypeService.findById(id);
		if (!holidayTypeOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		holidayTypeModel.setHolidayId(id);
		holidayTypeService.save(holidayTypeModel);
		return new ResponseEntity<HolidayType>(holidayTypeModel, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/findAll")
	public ResponseEntity<List<HolidayType>> findAll() {
		return new ResponseEntity<List<HolidayType>>(holidayTypeService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<HolidayType> findById(@PathVariable Long id) {
		Optional<HolidayType> holidayTypeOptional = holidayTypeService.findById(id);

		if (!holidayTypeOptional.isPresent()) {
			return new ResponseEntity<HolidayType>(new HolidayType(), HttpStatus.OK);
		}
		return new ResponseEntity<HolidayType>(holidayTypeOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<HolidayType> deleteById(@PathVariable Long id) {
		HolidayType holidayType = null;

		try {
			holidayTypeService.deleteById(id);
		} catch (Exception e) {
			LOGGER.error("Error while deleting HolidayType -> " + id, e);
		}
		return new ResponseEntity<HolidayType>(holidayType, HttpStatus.OK);
	}

}
