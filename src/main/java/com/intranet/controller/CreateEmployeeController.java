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

import com.intranet.dto.CreateEmployeeDTO;
import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.CreateEmployee;
import com.intranet.service.CreateEmployeeService;

@RestController
@RequestMapping(path = BaseController.CREATE_EMPLOYEE)
public class CreateEmployeeController {

	private static final Logger LOGGER = LoggerFactory.getLogger(CreateEmployeeController.class);

	@Autowired
	private CreateEmployeeService createEmployeeService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<CreateEmployee> add(@RequestBody CreateEmployeeDTO createEmployeeDTO) {
		CreateEmployee createEmployee = null;
		try {
			createEmployee = createEmployeeService.add(createEmployeeDTO);
		} catch (Exception e) {
			LOGGER.error("Error while adding CreateEmployee -> ", e);
		}
		return new ResponseEntity<CreateEmployee>(createEmployee, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<CreateEmployee> update(@RequestBody CreateEmployee createEmployeeModel,
			@PathVariable String empCode) {

		Optional<CreateEmployee> createEmployeeOptional = createEmployeeService.findById(empCode);
		if (!createEmployeeOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		createEmployeeModel.setEmpCode(empCode);
		createEmployeeService.save(createEmployeeModel);
		return new ResponseEntity<CreateEmployee>(createEmployeeModel, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/findAll")
	public ResponseEntity<List<CreateEmployee>> findAll() {
		return new ResponseEntity<List<CreateEmployee>>(createEmployeeService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<CreateEmployee> findById(@PathVariable String empCode) {
		Optional<CreateEmployee> createEmployeeOptional = createEmployeeService.findById(empCode);

		if (!createEmployeeOptional.isPresent()) {
			return new ResponseEntity<CreateEmployee>(new CreateEmployee(), HttpStatus.OK);
		}
		return new ResponseEntity<CreateEmployee>(createEmployeeOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<CreateEmployee> deleteById(@PathVariable String empCode) {
		CreateEmployee createEmployee = null;

		try {
			createEmployeeService.deleteById(empCode);
		} catch (Exception e) {
			LOGGER.error("Error while deleting CreateEmployee -> " + empCode, e);
		}
		return new ResponseEntity<CreateEmployee>(createEmployee, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/employeeLogin/{empCode}/{password}")
	public ResponseEntity<EmployeeInfoDTO> employeeLogin(@PathVariable String empCode, @PathVariable String password) {
		EmployeeInfoDTO isVerified = null;
		try {
			isVerified = createEmployeeService.employeeLogin(empCode, password);
		} catch (Exception e) {
			LOGGER.error("Error while login -> " + isVerified, e);
		}
		return new ResponseEntity<EmployeeInfoDTO>(isVerified, HttpStatus.OK);
	}

}
