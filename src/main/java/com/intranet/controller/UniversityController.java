//package com.intranet.controller;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.intranet.dto.UniversityDTO;
//import com.intranet.service.UniversityService;
//
//@RestController
//@RequestMapping(path = BaseController.UNIVERSITY)
//public class UniversityController {
//
//	private static final Logger LOGGER = LoggerFactory.getLogger(UniversityController.class);
//
//	@Autowired
//	private UniversityService leaveInfoService;
//
//	@CrossOrigin
//	@PostMapping(path = "/add")
//	public ResponseEntity<UniversityDTO> add(@RequestBody UniversityDTO universityDTOModel) {
//		UniversityDTO universityDTO = null;
//		try {
//			universityDTO = leaveInfoService.add(universityDTOModel);
//		} catch (Exception e) {
//			LOGGER.error("Error while adding LeaveInfo -> ", e);
//		}
//		return new ResponseEntity<UniversityDTO>(universityDTO, HttpStatus.OK);
//	}
//}
