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

import com.intranet.entity.ClientRegistrationInfo;
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
		ClientRegistrationInfo leaveInfo = null;
		try {
			leaveInfo = clientRegistrationInfoService.save(clientRegistrationInfoModel);
		} catch (Exception e) {
			LOGGER.error("Error while adding ClientRegistrationInfo -> ", e);
		}
		return new ResponseEntity<ClientRegistrationInfo>(leaveInfo, HttpStatus.OK);
	}

	@CrossOrigin
	@PutMapping(path = "/update/{code}")
	public ResponseEntity<ClientRegistrationInfo> update(
			@RequestBody ClientRegistrationInfo clientRegistrationInfoModel, @PathVariable String code) {

		Optional<ClientRegistrationInfo> clientRegistrationInfoOptional = clientRegistrationInfoService.findById(code);
		if (!clientRegistrationInfoOptional.isPresent()) {
			return ResponseEntity.notFound().build();
		}

		clientRegistrationInfoModel.setClientCode(code);
		clientRegistrationInfoService.save(clientRegistrationInfoModel);
		return new ResponseEntity<ClientRegistrationInfo>(clientRegistrationInfoModel, HttpStatus.OK);
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
	@GetMapping(path = "/adminLogin/{companyEmail}/{password}")
	public ResponseEntity<ClientRegistrationInfo> adminLogin(@PathVariable String companyEmail,
			@PathVariable String password) {
		ClientRegistrationInfo isVerified = null;
		try {
			isVerified = clientRegistrationInfoService.adminLogin(companyEmail, password);
		} catch (Exception e) {
			LOGGER.error("Error while login -> " + isVerified, e);
		}
		return new ResponseEntity<ClientRegistrationInfo>(isVerified, HttpStatus.OK);
	}

}
