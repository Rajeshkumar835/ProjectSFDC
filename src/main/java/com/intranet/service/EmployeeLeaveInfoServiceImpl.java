package com.intranet.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		employeeLeaveInfo.setCreatedDate(employeeLeaveInfoDTO.getCreatedDate());
		employeeLeaveInfo.setFromDate(employeeLeaveInfoDTO.getFromDate());
		employeeLeaveInfo.setToDate(employeeLeaveInfoDTO.getToDate());
		employeeLeaveInfo.setLeaveReason(employeeLeaveInfoDTO.getLeaveReason());
		employeeLeaveInfo.setStatus(employeeLeaveInfoDTO.getStatus());
		employeeLeaveInfo.setTotalLeaveGranted(employeeLeaveInfoDTO.getTotalLeaveGranted());
		employeeLeaveInfo.setLeaveApplied(employeeLeaveInfoDTO.getLeaveApplied());
		employeeLeaveInfo.setRejectionReason(employeeLeaveInfoDTO.getRejectionReason());
		employeeLeaveInfo.setLeaveInfo(leaveInfo);

		return employeeLeaveInfo;
	}

	@Override
	public EmployeeLeaveInfo save(EmployeeLeaveInfo empLeaveData) {
		return employeeLeaveInfoRepository.save(empLeaveData);
	}

	@Override
	public List<EmployeeLeaveInfo> findAll() {
		List<EmployeeLeaveInfo> listEmpLeaveInfo = employeeLeaveInfoRepository.findAll();
		return listEmpLeaveInfo;
	}

	@Override
	public List<EmployeeLeaveInfo> findAllLeaveInfoByEmpCode(String empCode) {
		List<EmployeeLeaveInfo> listEmpLeaveInfo = employeeLeaveInfoRepository.findAllLeaveInfoByEmpCode(empCode);
		return listEmpLeaveInfo;
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
