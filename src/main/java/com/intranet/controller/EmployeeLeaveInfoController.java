package com.intranet.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intranet.dto.EmployeeLeaveInfoDTO;
import com.intranet.entity.EmployeeLeaveInfo;

import com.intranet.service.EmployeeLeaveInfoService;

@RestController
@RequestMapping(path = BaseController.EMPLOYEE_LEAVE_INFO)
public class EmployeeLeaveInfoController {

	private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeLeaveInfoController.class);

	@Autowired
	EmployeeLeaveInfoService employeeLeaveInfoService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<EmployeeLeaveInfo> add(@RequestBody EmployeeLeaveInfoDTO employeeLeaveInfoModel) {
		EmployeeLeaveInfo employeeLeaveInfo = null;
		try {
			employeeLeaveInfo = employeeLeaveInfoService.add(employeeLeaveInfoModel);

		} catch (Exception e) {
			LOGGER.error("Error while adding EmployeeLeaveInfo -> ", e);
		}
		return new ResponseEntity<EmployeeLeaveInfo>(employeeLeaveInfo, HttpStatus.OK);

	}
	
	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<EmployeeLeaveInfo> update(@RequestBody EmployeeLeaveInfo employeeLeaveInfoModel, @PathVariable Long id) {

		Optional<EmployeeLeaveInfo> employeeLeaveInfoOptional = employeeLeaveInfoService.findById(id);
		if (!employeeLeaveInfoOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		employeeLeaveInfoModel.setLeaveId(id);
		employeeLeaveInfoService.save(employeeLeaveInfoModel);
		return new ResponseEntity<EmployeeLeaveInfo>(employeeLeaveInfoModel, HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/findAll")
	public ResponseEntity<List<EmployeeLeaveInfo>> findAll() {
		return new ResponseEntity<List<EmployeeLeaveInfo>>(employeeLeaveInfoService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/findAllLeaveInfoByStatus")
	public ResponseEntity<List<EmployeeLeaveInfo>>findAllLeaveInfoByStatus() {
		return new ResponseEntity<List<EmployeeLeaveInfo>>(employeeLeaveInfoService.findAllLeaveInfoByStatus(), HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/findAllLeaveInfoByEmpCode/{empCode}")
	public ResponseEntity<List<EmployeeLeaveInfo>> findAllLeaveInfoByEmpCode(@PathVariable String empCode) {
		return new ResponseEntity<List<EmployeeLeaveInfo>>(employeeLeaveInfoService.findAllLeaveInfoByEmpCode(empCode),
				HttpStatus.OK);
	}
	
	@CrossOrigin
	@GetMapping("/findLeaveInfoByEmpCodeandLeaveCode/{empCode}/{leaveCode}")
	public ResponseEntity<List<EmployeeLeaveInfo>> findLeaveInfoByEmpCodeandLeaveCode(@PathVariable String empCode, @PathVariable String leaveCode) {
		return new ResponseEntity<List<EmployeeLeaveInfo>>(employeeLeaveInfoService.findLeaveInfoByEmpCodeandLeaveCode(empCode, leaveCode),
				HttpStatus.OK);
	}

}
