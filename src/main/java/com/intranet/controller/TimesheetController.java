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

import com.intranet.entity.Timesheet;
import com.intranet.service.TimesheetService;

@RestController
@RequestMapping(path = BaseController.TIMESHEET)
public class TimesheetController {

	private static final Logger LOGGER = LoggerFactory.getLogger(TimesheetController.class);

	@Autowired
	private TimesheetService timesheetService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<Timesheet> add(@RequestBody Timesheet timesheetModel) {
		Timesheet timesheet = null;
		try {
			timesheet = timesheetService.save(timesheetModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding Timesheet -> ", e);
		}
		return new ResponseEntity<Timesheet>(timesheet, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<Timesheet> update(@RequestBody Timesheet timesheetModel, @PathVariable Long id) {

		Optional<Timesheet> timesheetOptional = timesheetService.findById(id);
		if (!timesheetOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		timesheetModel.setTimesheetId(id);
		timesheetService.save(timesheetModel);
		return new ResponseEntity<Timesheet>(timesheetModel, HttpStatus.OK);
	}

	@GetMapping("/findAll")
	public ResponseEntity<List<Timesheet>> findAll() {
		return new ResponseEntity<List<Timesheet>>(timesheetService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<Timesheet> findById(@PathVariable Long id) {
		Optional<Timesheet> timesheetOptional = timesheetService.findById(id);

		if (!timesheetOptional.isPresent()) {
			return new ResponseEntity<Timesheet>(new Timesheet(), HttpStatus.OK);
		}
		return new ResponseEntity<Timesheet>(timesheetOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<Timesheet> deleteById(@PathVariable Long id) {
		Timesheet timesheet = null;

		try {
			timesheetService.deleteById(id);
		} catch (Exception e) {
			LOGGER.error("Error while deleting Timesheet -> " + id, e);
		}
		return new ResponseEntity<Timesheet>(timesheet, HttpStatus.OK);
	}

}
