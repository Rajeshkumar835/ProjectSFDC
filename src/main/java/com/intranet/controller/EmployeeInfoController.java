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

import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.EmployeeInfo;
import com.intranet.service.EmployeeInfoService;

@RestController
@RequestMapping(path = BaseController.EMPLOYEE_INFO)
public class EmployeeInfoController {

	private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeInfoController.class);

	@Autowired
	private EmployeeInfoService employeeInfoService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<EmployeeInfoDTO> add(@RequestBody EmployeeInfoDTO employeeInfoDTO) {
		EmployeeInfoDTO employeeInfo = null;
		try {
			employeeInfo = employeeInfoService.add(employeeInfoDTO);
		} catch (Exception e) {
			LOGGER.error("Error while adding Employee Info -> ", e);
		}
		return new ResponseEntity<EmployeeInfoDTO>(employeeInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<EmployeeInfo> update(@RequestBody EmployeeInfo employeeInfoModel, @PathVariable String id) {

		Optional<EmployeeInfo> employeeInfoOptional = employeeInfoService.findById(id);
		if (!employeeInfoOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		employeeInfoModel.setEmpCode(id);
		employeeInfoService.save(employeeInfoModel);
		return new ResponseEntity<EmployeeInfo>(employeeInfoModel, HttpStatus.OK);
	}

	@GetMapping("/findAll")
	public ResponseEntity<List<EmployeeInfo>> findAll() {
		return new ResponseEntity<List<EmployeeInfo>>(employeeInfoService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<EmployeeInfo> findById(@PathVariable String id) {
		Optional<EmployeeInfo> employeeInfoOptional = employeeInfoService.findById(id);

		if (!employeeInfoOptional.isPresent()) {
			return new ResponseEntity<EmployeeInfo>(new EmployeeInfo(), HttpStatus.OK);
		}
		return new ResponseEntity<EmployeeInfo>(employeeInfoOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<EmployeeInfo> deleteById(@PathVariable String id) {
		EmployeeInfo employeeInfo = null;

		try {
			employeeInfoService.deleteById(id);
		} catch (Exception e) {
			LOGGER.error("Error while deleting Employee Info -> " + id, e);
		}
		return new ResponseEntity<EmployeeInfo>(employeeInfo, HttpStatus.OK);
	}

}
