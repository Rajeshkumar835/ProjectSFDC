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

import com.intranet.dto.CompanyWeeklyOffDaysDTO;
import com.intranet.entity.CompanyWeeklyOffDaysList;
import com.intranet.service.CompanyWeeklyOffDaysListService;

@RestController
@RequestMapping(path = BaseController.COMPANY_WEEKLY_OFF_DAYS_LIST)
public class CompanyWeeklyOffDaysListController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CompanyWeeklyOffDaysListController.class);

	@Autowired
	private CompanyWeeklyOffDaysListService companyWeeklyOffDaysListService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<CompanyWeeklyOffDaysList> add(
			@RequestBody CompanyWeeklyOffDaysDTO companyWeeklyOffDaysListModel) {
		CompanyWeeklyOffDaysList companyWeeklyOffDaysList = null;
		try {
			companyWeeklyOffDaysList = companyWeeklyOffDaysListService.add(companyWeeklyOffDaysListModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding CompanyWeeklyOffDaysList -> ", e);
		}
		return new ResponseEntity<CompanyWeeklyOffDaysList>(companyWeeklyOffDaysList, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<CompanyWeeklyOffDaysList> update(
			@RequestBody CompanyWeeklyOffDaysList companyWeeklyOffDaysListModel, @PathVariable Long id) {

		Optional<CompanyWeeklyOffDaysList> holidayTypeOptional = companyWeeklyOffDaysListService.findById(id);
		if (!holidayTypeOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		companyWeeklyOffDaysListModel.setId(id);
		companyWeeklyOffDaysListService.save(companyWeeklyOffDaysListModel);
		return new ResponseEntity<CompanyWeeklyOffDaysList>(companyWeeklyOffDaysListModel, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/findAll")
	public ResponseEntity<List<CompanyWeeklyOffDaysList>> findAll() {
		return new ResponseEntity<List<CompanyWeeklyOffDaysList>>(companyWeeklyOffDaysListService.findAll(),
				HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<CompanyWeeklyOffDaysList> findById(@PathVariable Long id) {
		Optional<CompanyWeeklyOffDaysList> holidayTypeOptional = companyWeeklyOffDaysListService.findById(id);

		if (!holidayTypeOptional.isPresent()) {
			return new ResponseEntity<CompanyWeeklyOffDaysList>(new CompanyWeeklyOffDaysList(), HttpStatus.OK);
		}
		return new ResponseEntity<CompanyWeeklyOffDaysList>(holidayTypeOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<CompanyWeeklyOffDaysList> deleteById(@PathVariable Long id) {
		CompanyWeeklyOffDaysList holidayType = null;

		try {
			companyWeeklyOffDaysListService.deleteById(id);
		} catch (Exception e) {
			LOGGER.error("Error while deleting CompanyWeeklyOffDaysList -> " + id, e);
		}
		return new ResponseEntity<CompanyWeeklyOffDaysList>(holidayType, HttpStatus.OK);
	}

}
