package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.AddressInfo;
import com.intranet.entity.BankInfo;
import com.intranet.entity.CurrentExperience;
import com.intranet.entity.EmployeeInfo;
import com.intranet.entity.PreviousExperience;
import com.intranet.entity.QualificationInfo;
import com.intranet.entity.ReportingManager;
import com.intranet.repository.AddressInfoRepository;
import com.intranet.repository.BankInfoRepository;
import com.intranet.repository.CurrentExperienceRepository;
import com.intranet.repository.EmployeeInfoRepository;
import com.intranet.repository.PreviousExperienceRepository;
import com.intranet.repository.QualificationInfoRepository;
import com.intranet.repository.ReportingManagerRepository;

@Service
public class EmployeeInfoServiceImpl implements EmployeeInfoService {

	@Autowired
	private EmployeeInfoRepository employeeInfoRepository;

	@Autowired
	private QualificationInfoRepository qualificationInfoRepository;

	@Autowired
	private BankInfoRepository bankInfoRepository;

	@Autowired
	private AddressInfoRepository addressInfoRepository;

	@Autowired
	private CurrentExperienceRepository currentExperienceRepository;

	@Autowired
	private PreviousExperienceRepository previousExperienceRepository;

	@Autowired
	private ReportingManagerRepository reportingManagerRepository;

	@Override
	public EmployeeInfoDTO add(EmployeeInfoDTO employeeInfoDTO) {
		EmployeeInfoDTO responseEmployeeInfoDTO = new EmployeeInfoDTO();
		EmployeeInfo employeeInfo = employeeInfoDTO.getEmployeeInfo();
		if (employeeInfo == null) {
			return new EmployeeInfoDTO();
		}

		EmployeeInfo employeeInfoSaved = employeeInfoRepository.save(employeeInfo);
		responseEmployeeInfoDTO.setEmployeeInfo(employeeInfoSaved);
		String empCode = employeeInfoSaved.getEmpCode();

		List<QualificationInfo> qualificationInfoList = employeeInfoDTO.getQualificationInfo();
		for (QualificationInfo qInfo : qualificationInfoList) {
			qInfo.setEmpCode(empCode);
			qualificationInfoRepository.save(qInfo);
		}
		responseEmployeeInfoDTO.setQualificationInfo(qualificationInfoList);

		List<BankInfo> bankInfoList = employeeInfoDTO.getBankInfo();
		for (BankInfo bank : bankInfoList) {
			bank.setEmpCode(empCode);
			bankInfoRepository.save(bank);
		}
		responseEmployeeInfoDTO.setBankInfo(bankInfoList);

		List<AddressInfo> addressInfoList = employeeInfoDTO.getAddressInfo();
		for (AddressInfo address : addressInfoList) {
			address.setEmpCode(empCode);
			addressInfoRepository.save(address);
		}
		responseEmployeeInfoDTO.setAddressInfo(addressInfoList);

		List<CurrentExperience> currentExperienceList = employeeInfoDTO.getCurrentExperience();
		for (CurrentExperience currExp : currentExperienceList) {
			currExp.setEmpCode(empCode);
			currentExperienceRepository.save(currExp);
		}
		responseEmployeeInfoDTO.setCurrentExperience(currentExperienceList);

		List<PreviousExperience> previousExperienceList = employeeInfoDTO.getPreviousExperience();
		for (PreviousExperience prev : previousExperienceList) {
			prev.setEmpCode(empCode);
			previousExperienceRepository.save(prev);
		}
		responseEmployeeInfoDTO.setPreviousExperience(previousExperienceList);

		ReportingManager reportingManager = employeeInfoDTO.getReportingManager();
		reportingManager.setEmpCode(empCode);
		responseEmployeeInfoDTO.setReportingManager(reportingManagerRepository.save(reportingManager));

		return responseEmployeeInfoDTO;
	}

//	private EmployeeInfo transformDTOtoBO(EmployeeInfoDTO employeeInfoDTO, EmployeeInfo employeeInfo) {
//
//		// Get Client Info Object by Code
//		Optional<ClientInfo> clientOpt = clientInfoService.findById(employeeInfoDTO.getClientCode());
//		ClientInfo clientInfo = null;
//		if (clientOpt.isPresent()) {
//			clientInfo = clientOpt.get();
//		} else {
//			return null;
//		}
//
//		employeeInfo.setEmpCode(employeeInfoDTO.getEmpCode());
//		employeeInfo.setFirstName(employeeInfoDTO.getFirstName());
//		employeeInfo.setMiddleName(employeeInfoDTO.getMiddleName());
//		employeeInfo.setLastName(employeeInfoDTO.getLastName());
//		employeeInfo.setDesignation(employeeInfoDTO.getDesignation());
//		employeeInfo.setHireDate(employeeInfoDTO.getHireDate());
//		employeeInfo.setCurrSalary(employeeInfoDTO.getCurrSalary());
//		employeeInfo.setDob(employeeInfoDTO.getDob());
//		employeeInfo.setFatherName(employeeInfoDTO.getFatherName());
//		employeeInfo.setContactNo(employeeInfoDTO.getContactNo());
//		employeeInfo.setEmailId(employeeInfoDTO.getEmailId());
//		employeeInfo.setHomePhoneNo(employeeInfoDTO.getHomePhoneNo());
//		employeeInfo.setPassportNo(employeeInfoDTO.getPassportNo());
//		employeeInfo.setPanCardNo(employeeInfoDTO.getPanCardNo());
//		employeeInfo.setClientInfo(clientInfo);
//
//		return employeeInfo;
//
//	}

	@Override
	public List<EmployeeInfo> findAll() {
		return employeeInfoRepository.findAll();
	}

	@Override
	public EmployeeInfo save(EmployeeInfo bankAccount) {
		return employeeInfoRepository.save(bankAccount);
	}

	@Override
	public Optional<EmployeeInfo> findById(String id) {
		return employeeInfoRepository.findById(id);
	}

	@Override
	public void deleteById(String id) {
		employeeInfoRepository.deleteById(id);
	}

}
