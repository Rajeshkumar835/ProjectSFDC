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

import com.intranet.dto.CompanyHolidayListDTO;
import com.intranet.entity.CompanyHolidayList;
import com.intranet.service.CompanyHolidayListService;

@RestController
@RequestMapping(path = BaseController.COMPANY_HOLIDAY_LIST)
public class CompanyHolidayListController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CompanyHolidayListController.class);

	@Autowired
	private CompanyHolidayListService holidayTypeService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<CompanyHolidayList> add(@RequestBody CompanyHolidayListDTO companyHolidayListModel) {
		CompanyHolidayList companyHolidayList = null;
		try {
			companyHolidayList = holidayTypeService.add(companyHolidayListModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding CompanyHolidayList -> ", e);
		}
		return new ResponseEntity<CompanyHolidayList>(companyHolidayList, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<CompanyHolidayList> update(@RequestBody CompanyHolidayList companyHolidayListModel,
			@PathVariable Long id) {

		Optional<CompanyHolidayList> holidayTypeOptional = holidayTypeService.findById(id);
		if (!holidayTypeOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		companyHolidayListModel.setId(id);
		holidayTypeService.save(companyHolidayListModel);
		return new ResponseEntity<CompanyHolidayList>(companyHolidayListModel, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/findAll")
	public ResponseEntity<List<CompanyHolidayList>> findAll() {
		return new ResponseEntity<List<CompanyHolidayList>>(holidayTypeService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<CompanyHolidayList> findById(@PathVariable Long id) {
		Optional<CompanyHolidayList> holidayTypeOptional = holidayTypeService.findById(id);

		if (!holidayTypeOptional.isPresent()) {
			return new ResponseEntity<CompanyHolidayList>(new CompanyHolidayList(), HttpStatus.OK);
		}
		return new ResponseEntity<CompanyHolidayList>(holidayTypeOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<CompanyHolidayList> deleteById(@PathVariable Long id) {
		CompanyHolidayList holidayType = null;

		try {
			holidayTypeService.deleteById(id);
		} catch (Exception e) {
			LOGGER.error("Error while deleting CompanyHolidayList -> " + id, e);
		}
		return new ResponseEntity<CompanyHolidayList>(holidayType, HttpStatus.OK);
	}

}
