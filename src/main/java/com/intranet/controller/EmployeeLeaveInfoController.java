package com.intranet.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

	@GetMapping("/findAllNewEmployeeLeaveInfo")
	public ResponseEntity<List<EmployeeLeaveInfo>> findAllNewEmployeeLeaveInfo() {
		return new ResponseEntity<List<EmployeeLeaveInfo>>(employeeLeaveInfoService.findAllNewEmployeeLeaveInfo(),
				HttpStatus.OK);
	}

}
