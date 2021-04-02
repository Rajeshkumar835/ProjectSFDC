package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.intranet.dto.EmployeeLeaveInfoDTO;
import com.intranet.entity.EmployeeLeaveInfo;
import com.intranet.entity.LeaveInfo;
import com.intranet.repository.EmployeeLeaveInfoRepository;

@Service
public class EmployeeLeaveInfoServiceImpl implements EmployeeLeaveInfoService {

	private static final Logger LOGGER = LoggerFactory.getLogger(EmployeeLeaveInfoServiceImpl.class);

	@Autowired
	EmployeeLeaveInfoRepository employeeLeaveInfoRepository;

	@Autowired
	private LeaveInfoService leaveInfoService;

	@Override
	public EmployeeLeaveInfo add(EmployeeLeaveInfoDTO employeeLeaveInfoDTO) {
		EmployeeLeaveInfo empLeaveInfo = transformDTOtoBO(employeeLeaveInfoDTO, new EmployeeLeaveInfo());
		if (empLeaveInfo == null) {
			return new EmployeeLeaveInfo();
		}
		EmployeeLeaveInfo empLeaveInfoSaved = employeeLeaveInfoRepository.save(empLeaveInfo);
		return empLeaveInfoSaved;
	}

	private EmployeeLeaveInfo transformDTOtoBO(EmployeeLeaveInfoDTO employeeLeaveInfoDTO,
			EmployeeLeaveInfo employeeLeaveInfo) {

		LeaveInfo leaveInfo = leaveInfoService.findByLeaveCode(employeeLeaveInfoDTO.getLeaveCode());

		employeeLeaveInfo.setLeaveId(employeeLeaveInfoDTO.getId());
		employeeLeaveInfo.setEmpCode(employeeLeaveInfoDTO.getEmpCode());
		employeeLeaveInfo.setEmpName(employeeLeaveInfoDTO.getEmpName());
		employeeLeaveInfo.setEmailId(employeeLeaveInfoDTO.getEmailId());
		employeeLeaveInfo.setCreatedDate(employeeLeaveInfoDTO.getCreatedDate());
		employeeLeaveInfo.setFromDate(employeeLeaveInfoDTO.getFromDate());
		employeeLeaveInfo.setToDate(employeeLeaveInfoDTO.getToDate());
		employeeLeaveInfo.setLeaveReason(employeeLeaveInfoDTO.getLeaveReason());
		employeeLeaveInfo.setStatus(employeeLeaveInfoDTO.getStatus());
		employeeLeaveInfo.setTotalLeaveAvaiable(employeeLeaveInfoDTO.getTotalLeaveAvaiable());
		employeeLeaveInfo.setTotalLeaveGranted(employeeLeaveInfoDTO.getTotalLeaveGranted());
		employeeLeaveInfo.setLeaveApplied(employeeLeaveInfoDTO.getLeaveApplied());
		employeeLeaveInfo.setRejectionReason(employeeLeaveInfoDTO.getRejectionReason());
		employeeLeaveInfo.setManagerCode(employeeLeaveInfoDTO.getManagerCode());
		employeeLeaveInfo.setLeaveInfo(leaveInfo);

		return employeeLeaveInfo;
	}

	@CrossOrigin
	@Override
	public Optional<EmployeeLeaveInfo> findById(Long id) {
		return employeeLeaveInfoRepository.findById(id);
	}

	@Override
	public EmployeeLeaveInfo save(EmployeeLeaveInfo empLeaveData) {
		return employeeLeaveInfoRepository.save(empLeaveData);
	}

	@CrossOrigin
	@Override
	public List<EmployeeLeaveInfo> findAll() {
		List<EmployeeLeaveInfo> listEmpLeaveInfo = employeeLeaveInfoRepository.findAll();
		return listEmpLeaveInfo;
	}

	@Override
	public List<EmployeeLeaveInfo> findAllLeaveInfoByStatus(String managerCode) {
		List<EmployeeLeaveInfo> listEmpLeaveInfo2 = employeeLeaveInfoRepository.findAllLeaveInfoByStatus(managerCode);
		return listEmpLeaveInfo2;
	}

	@CrossOrigin
	@Override
	public List<EmployeeLeaveInfo> findAllLeaveInfoByEmpCode(String empCode) {
		List<EmployeeLeaveInfo> listEmpLeaveInfo = employeeLeaveInfoRepository.findAllLeaveInfoByEmpCode(empCode);
		return listEmpLeaveInfo;
	}
	
	@CrossOrigin
	@Override
	public List<EmployeeLeaveInfo> findLeaveInfoByEmpCodeandLeaveCode(String empCode, String leaveCode) {
		List<EmployeeLeaveInfo> listEmpCodeandLeaveCodeLeaveInfo = employeeLeaveInfoRepository.findLeaveInfoByEmpCodeandLeaveCode(empCode, leaveCode);
		return listEmpCodeandLeaveCodeLeaveInfo;
	}

//	@Override
//	public List<EmployeeLeaveInfoModel> findAllEmployeeLeaveInfo() {
//		List<Tuple> ob = new ArrayList<Tuple>();
//		List<EmployeeLeaveInfoModel> employeeLeaveInfoList = new ArrayList<EmployeeLeaveInfoModel>();
//		try {
//			ob = employeeLeaveInfoRepository.findAllEmployeeLeaveInfo();
//			if (!ob.isEmpty()) {
//				for (Tuple lst : ob) {
//
//				}
//			}
//
//		} catch (NumberFormatException e) {
//			LOGGER.error("Error while getting My EMP Leave Info -> ", e);
//		}
//		return employeeLeaveInfoList;
//	}

}
