package com.intranet.controller;

import java.util.List;

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

import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.model.AdminLogin;
import com.intranet.service.ClientRegistrationInfoService;

@RestController
@RequestMapping(path = BaseController.CLIENT_REGISTRATION_INFO)
public class ClientRegistrationInfoController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ClientRegistrationInfoController.class);

	@Autowired
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@CrossOrigin
	@PostMapping(path = "/add")
	public ResponseEntity<ClientRegistrationInfo> add(@RequestBody ClientRegistrationInfo clientRegistrationInfoModel) {
		ClientRegistrationInfo clientRegistrationInfo = null;
		try {
			clientRegistrationInfo = clientRegistrationInfoService.save(clientRegistrationInfoModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding ClientRegistrationInfo -> ", e);
		}
		return new ResponseEntity<ClientRegistrationInfo>(clientRegistrationInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{code}")
	public ResponseEntity<ClientRegistrationInfo> update(
			@RequestBody ClientRegistrationInfo clientRegistrationInfoModel, @PathVariable String code) {

		ClientRegistrationInfo clientRegistrationInfo = null;
		try {
			clientRegistrationInfo = clientRegistrationInfoService.update(clientRegistrationInfoModel, code);
		} catch (Exception e) {
			LOGGER.error("Error while login -> " + clientRegistrationInfo, e);
		}
		return new ResponseEntity<ClientRegistrationInfo>(clientRegistrationInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping("/findAll")
	public ResponseEntity<List<ClientRegistrationInfo>> findAll() {
		return new ResponseEntity<List<ClientRegistrationInfo>>(clientRegistrationInfoService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin
	@GetMapping(path = "/findById/{code}")
	public ResponseEntity<ClientRegistrationInfo> findById(@PathVariable String code) {
		ClientRegistrationInfo clientRegistrationInfo = clientRegistrationInfoService
				.clientRegistrationInfoByClientCode(code);

		return new ResponseEntity<ClientRegistrationInfo>(clientRegistrationInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(path = "/deleteById/{code}")
	public ResponseEntity<ClientRegistrationInfo> deleteById(@PathVariable String code) {
		ClientRegistrationInfo leaveInfo = null;

		try {
			clientRegistrationInfoService.deleteById(code);
		} catch (Exception e) {
			LOGGER.error("Error while deleting ClientRegistrationInfo -> " + code, e);
		}
		return new ResponseEntity<ClientRegistrationInfo>(leaveInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@PostMapping(path = "/adminLogin")
	public ResponseEntity<ClientRegistrationInfo> adminLogin(@RequestBody AdminLogin adminLogin) {
		ClientRegistrationInfo clientRegistrationInfo = null;
		try {
			clientRegistrationInfo = clientRegistrationInfoService.adminLogin(adminLogin);
		} catch (Exception e) {
			LOGGER.error("Error while login -> " + clientRegistrationInfo, e);
		}
		return new ResponseEntity<ClientRegistrationInfo>(clientRegistrationInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/changeAdminPassword")
	public ResponseEntity<ClientRegistrationInfo> changeAdminPassword(@RequestBody AdminLogin adminLogin) {
		ClientRegistrationInfo clientRegistrationInfo = null;
		try {
			clientRegistrationInfo = clientRegistrationInfoService.changeAdminPassword(adminLogin);
		} catch (Exception e) {
			LOGGER.error("Error while Changing password -> " + clientRegistrationInfo, e);
		}
		return new ResponseEntity<ClientRegistrationInfo>(clientRegistrationInfo, HttpStatus.OK);
	}

}
