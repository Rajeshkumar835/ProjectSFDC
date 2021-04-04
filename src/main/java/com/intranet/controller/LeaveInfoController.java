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

import com.intranet.entity.LeaveInfo;
import com.intranet.service.LeaveInfoService;

@RestController
@RequestMapping(path = BaseController.LEAVE_INFO)
public class LeaveInfoController {

	private static final Logger LOGGER = LoggerFactory.getLogger(LeaveInfoController.class);

	@Autowired
	private LeaveInfoService leaveInfoService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<LeaveInfo> add(@RequestBody LeaveInfo leaveInfoModel) {
		LeaveInfo leaveInfo = null;
		try {
			leaveInfo = leaveInfoService.add(leaveInfoModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding LeaveInfo -> ", e);
		}
		return new ResponseEntity<LeaveInfo>(leaveInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{id}")
	public ResponseEntity<LeaveInfo> update(@RequestBody LeaveInfo leaveInfoModel, @PathVariable Long id) {

		Optional<LeaveInfo> leaveInfoOptional = leaveInfoService.findById(id);
		if (!leaveInfoOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		leaveInfoModel.setId(id);
		leaveInfoService.save(leaveInfoModel);
		return new ResponseEntity<LeaveInfo>(leaveInfoModel, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/findAll")
	public ResponseEntity<List<LeaveInfo>> findAll() {
		return new ResponseEntity<List<LeaveInfo>>(leaveInfoService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{id}")
	public ResponseEntity<LeaveInfo> findById(@PathVariable Long id) {
		Optional<LeaveInfo> leaveInfoOptional = leaveInfoService.findById(id);

		if (!leaveInfoOptional.isPresent()) {
			return new ResponseEntity<LeaveInfo>(new LeaveInfo(), HttpStatus.OK);
		}
		return new ResponseEntity<LeaveInfo>(leaveInfoOptional.get(), HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{id}")
	public ResponseEntity<LeaveInfo> deleteById(@PathVariable Long id) {
		LeaveInfo leaveInfo = null;

		try {
			leaveInfoService.deleteById(id);
		} catch (Exception e) {
			LOGGER.error("Error while deleting LeaveInfo -> " + id, e);
		}
		return new ResponseEntity<LeaveInfo>(leaveInfo, HttpStatus.OK);
	}

}
