package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.AddressInfo;
import com.intranet.entity.BankInfo;
import com.intranet.entity.ClientRegistrationInfo;
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

	@Autowired
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@Override
	public EmployeeInfoDTO add(EmployeeInfoDTO employeeInfoDTOObj) {
		EmployeeInfoDTO responseEmployeeInfoDTO = new EmployeeInfoDTO();
		EmployeeInfo employeeInfo = transformObject(employeeInfoDTOObj, new EmployeeInfo());
		if (employeeInfo == null) {
			return new EmployeeInfoDTO();
		}

		EmployeeInfo employeeInfoSaved = employeeInfoRepository.save(employeeInfo);

		responseEmployeeInfoDTO.setEmpCode(employeeInfoSaved.getEmpCode());
		responseEmployeeInfoDTO.setCreatedDate(employeeInfoSaved.getCreatedDate());
		responseEmployeeInfoDTO.setFirstName(employeeInfoSaved.getFirstName());
		responseEmployeeInfoDTO.setMiddleName(employeeInfoSaved.getMiddleName());
		responseEmployeeInfoDTO.setLastName(employeeInfoSaved.getLastName());
		responseEmployeeInfoDTO.setDesignation(employeeInfoSaved.getDesignation());
		responseEmployeeInfoDTO.setHireDate(employeeInfoSaved.getHireDate());
		responseEmployeeInfoDTO.setCurrSalary(employeeInfoSaved.getCurrSalary());
		responseEmployeeInfoDTO.setDob(employeeInfoSaved.getDob());
		responseEmployeeInfoDTO.setFatherName(employeeInfoSaved.getFatherName());
		responseEmployeeInfoDTO.setContactNo(employeeInfoSaved.getContactNo());
		responseEmployeeInfoDTO.setEmailId(employeeInfoSaved.getEmailId());
		responseEmployeeInfoDTO.setHomePhoneNo(employeeInfoSaved.getHomePhoneNo());
		responseEmployeeInfoDTO.setPassportNo(employeeInfoSaved.getPassportNo());
		responseEmployeeInfoDTO.setPanCardNo(employeeInfoSaved.getPanCardNo());
		responseEmployeeInfoDTO.setClientCode(employeeInfoSaved.getClientRegistrationInfo().getClientCode());

		String empCode = employeeInfoSaved.getEmpCode();

		List<QualificationInfo> qualificationInfoList = employeeInfoDTOObj.getQualificationInfo();
		for (QualificationInfo qInfo : qualificationInfoList) {
			qInfo.setEmpCode(empCode);
			qualificationInfoRepository.save(qInfo);
		}
		responseEmployeeInfoDTO.setQualificationInfo(qualificationInfoList);

		List<BankInfo> bankInfoList = employeeInfoDTOObj.getBankInfo();
		for (BankInfo bank : bankInfoList) {
			bank.setEmpCode(empCode);
			bankInfoRepository.save(bank);
		}
		responseEmployeeInfoDTO.setBankInfo(bankInfoList);

		List<AddressInfo> addressInfoList = employeeInfoDTOObj.getAddressInfo();
		for (AddressInfo address : addressInfoList) {
			address.setEmpCode(empCode);
			addressInfoRepository.save(address);
		}
		responseEmployeeInfoDTO.setAddressInfo(addressInfoList);

		List<CurrentExperience> currentExperienceList = employeeInfoDTOObj.getCurrentExperience();
		for (CurrentExperience currExp : currentExperienceList) {
			currExp.setEmpCode(empCode);
			currentExperienceRepository.save(currExp);
		}
		responseEmployeeInfoDTO.setCurrentExperience(currentExperienceList);

		List<PreviousExperience> previousExperienceList = employeeInfoDTOObj.getPreviousExperience();
		for (PreviousExperience prev : previousExperienceList) {
			prev.setEmpCode(empCode);
			previousExperienceRepository.save(prev);
		}
		responseEmployeeInfoDTO.setPreviousExperience(previousExperienceList);

		ReportingManager reportingManager = employeeInfoDTOObj.getReportingManager();
		reportingManager.setEmpCode(empCode);
		responseEmployeeInfoDTO.setReportingManager(reportingManagerRepository.save(reportingManager));

		return responseEmployeeInfoDTO;
	}

	public EmployeeInfo transformObject(EmployeeInfoDTO employeeInfoDTO, EmployeeInfo employeeInfo) {

		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
				.clientRegistrationInfoByClientCode(employeeInfoDTO.getClientCode());

		employeeInfo.setEmpCode(employeeInfoDTO.getEmpCode());
		employeeInfo.setCreatedDate(employeeInfoDTO.getCreatedDate());
		employeeInfo.setFirstName(employeeInfoDTO.getFirstName());
		employeeInfo.setMiddleName(employeeInfoDTO.getMiddleName());
		employeeInfo.setLastName(employeeInfoDTO.getLastName());
		employeeInfo.setDesignation(employeeInfoDTO.getDesignation());
		employeeInfo.setHireDate(employeeInfoDTO.getHireDate());
		employeeInfo.setCurrSalary(employeeInfoDTO.getCurrSalary());
		employeeInfo.setDob(employeeInfoDTO.getDob());
		employeeInfo.setFatherName(employeeInfoDTO.getFatherName());
		employeeInfo.setContactNo(employeeInfoDTO.getContactNo());
		employeeInfo.setEmailId(employeeInfoDTO.getEmailId());
		employeeInfo.setHomePhoneNo(employeeInfoDTO.getHomePhoneNo());
		employeeInfo.setPassportNo(employeeInfoDTO.getPassportNo());
		employeeInfo.setPanCardNo(employeeInfoDTO.getPanCardNo());
		employeeInfo.setClientRegistrationInfo(clientRegInfo);

		return employeeInfo;
	}

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

	@Override
	public EmployeeInfoDTO findByEmpCode(String empCode) {
		EmployeeInfoDTO responseEmployeeInfoDTO = new EmployeeInfoDTO();
		EmployeeInfo employeeInfoSaved = employeeInfoRepository.findByEmpCode(empCode);
		// responseEmployeeInfoDTO.setEmployeeInfo(empInfo);

		responseEmployeeInfoDTO.setEmpCode(employeeInfoSaved.getEmpCode());
		responseEmployeeInfoDTO.setCreatedDate(employeeInfoSaved.getCreatedDate());
		responseEmployeeInfoDTO.setFirstName(employeeInfoSaved.getFirstName());
		responseEmployeeInfoDTO.setMiddleName(employeeInfoSaved.getMiddleName());
		responseEmployeeInfoDTO.setLastName(employeeInfoSaved.getLastName());
		responseEmployeeInfoDTO.setDesignation(employeeInfoSaved.getDesignation());
		responseEmployeeInfoDTO.setHireDate(employeeInfoSaved.getHireDate());
		responseEmployeeInfoDTO.setCurrSalary(employeeInfoSaved.getCurrSalary());
		responseEmployeeInfoDTO.setDob(employeeInfoSaved.getDob());
		responseEmployeeInfoDTO.setFatherName(employeeInfoSaved.getFatherName());
		responseEmployeeInfoDTO.setContactNo(employeeInfoSaved.getContactNo());
		responseEmployeeInfoDTO.setEmailId(employeeInfoSaved.getEmailId());
		responseEmployeeInfoDTO.setHomePhoneNo(employeeInfoSaved.getHomePhoneNo());
		responseEmployeeInfoDTO.setPassportNo(employeeInfoSaved.getPassportNo());
		responseEmployeeInfoDTO.setPanCardNo(employeeInfoSaved.getPanCardNo());
		responseEmployeeInfoDTO.setClientCode(employeeInfoSaved.getClientRegistrationInfo().getClientCode());

		List<QualificationInfo> qualificationInfoList = qualificationInfoRepository.findByEmpCode(empCode);
		responseEmployeeInfoDTO.setQualificationInfo(qualificationInfoList);

		List<BankInfo> bankInfoList = bankInfoRepository.findByEmpCode(empCode);
		responseEmployeeInfoDTO.setBankInfo(bankInfoList);

		List<AddressInfo> addressInfoList = addressInfoRepository.findByEmpCode(empCode);
		responseEmployeeInfoDTO.setAddressInfo(addressInfoList);

		List<CurrentExperience> currExperienceList = currentExperienceRepository.findByEmpCode(empCode);
		responseEmployeeInfoDTO.setCurrentExperience(currExperienceList);

		List<PreviousExperience> previousExperienceList = previousExperienceRepository.findByEmpCode(empCode);
		responseEmployeeInfoDTO.setPreviousExperience(previousExperienceList);

		ReportingManager reportingManager = reportingManagerRepository.findByEmpCode(empCode);
		responseEmployeeInfoDTO.setReportingManager(reportingManager);

		return responseEmployeeInfoDTO;
	}

}
