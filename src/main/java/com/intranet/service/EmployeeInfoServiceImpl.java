package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.EmployeeCreationDTO;
import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.AddressInfo;
import com.intranet.entity.BankInfo;
import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.entity.CurrentExperience;
import com.intranet.entity.EmployeeInfo;
import com.intranet.entity.PreviousExperience;
import com.intranet.entity.QualificationInfo;
import com.intranet.repository.AddressInfoRepository;
import com.intranet.repository.BankInfoRepository;
import com.intranet.repository.CurrentExperienceRepository;
import com.intranet.repository.EmployeeInfoRepository;
import com.intranet.repository.PreviousExperienceRepository;
import com.intranet.repository.QualificationInfoRepository;
import com.intranet.util.AES;

@Service
public class EmployeeInfoServiceImpl implements EmployeeInfoService {

	private static final Logger LOGGER = Logger.getLogger(EmployeeInfoServiceImpl.class);

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
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@Override
	public EmployeeInfoDTO add(EmployeeInfoDTO employeeInfoDTOObj) {
		EmployeeInfoDTO responseEmployeeInfoDTO = new EmployeeInfoDTO();
		EmployeeInfo employeeInfo = transformObject(employeeInfoDTOObj, new EmployeeInfo());
		if (employeeInfo == null) {
			return new EmployeeInfoDTO();
		}
		// user.setPassword(AES.encrypt(user.getPassword(), AES.generateKey()));

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
		responseEmployeeInfoDTO.setPassword(employeeInfoSaved.getPassword());
		responseEmployeeInfoDTO.setFatherName(employeeInfoSaved.getFatherName());
		responseEmployeeInfoDTO.setContactNo(employeeInfoSaved.getContactNo());
		responseEmployeeInfoDTO.setEmailId(employeeInfoSaved.getEmailId());
		responseEmployeeInfoDTO.setHomePhoneNo(employeeInfoSaved.getHomePhoneNo());
		responseEmployeeInfoDTO.setPassportNo(employeeInfoSaved.getPassportNo());
		responseEmployeeInfoDTO.setPanCardNo(employeeInfoSaved.getPanCardNo());
		responseEmployeeInfoDTO.setClientCode(employeeInfoSaved.getClientRegistrationInfo().getClientCode());
		responseEmployeeInfoDTO.setManagerCode(employeeInfoSaved.getReportingManager().getEmpCode());

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

		return responseEmployeeInfoDTO;
	}

	public EmployeeInfo transformObject(EmployeeInfoDTO employeeInfoDTO, EmployeeInfo employeeInfo) {

		try {
			ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
					.clientRegistrationInfoByClientCode(employeeInfoDTO.getClientCode());

			EmployeeInfo empManagerInfo = employeeInfoRepository.findByEmpCode(employeeInfoDTO.getManagerCode());

			// user.setPassword(AES.encrypt(user.getPassword(), AES.generateKey()));

			employeeInfo.setEmpCode(employeeInfoDTO.getEmpCode());
			employeeInfo.setCreatedDate(employeeInfoDTO.getCreatedDate());
			employeeInfo.setFirstName(employeeInfoDTO.getFirstName());
			employeeInfo.setMiddleName(employeeInfoDTO.getMiddleName());
			employeeInfo.setLastName(employeeInfoDTO.getLastName());
			employeeInfo.setDesignation(employeeInfoDTO.getDesignation());
			employeeInfo.setHireDate(employeeInfoDTO.getHireDate());
			employeeInfo.setCurrSalary(employeeInfoDTO.getCurrSalary());
			employeeInfo.setDob(employeeInfoDTO.getDob());
			employeeInfo.setPassword(employeeInfoDTO.getPassword());
			employeeInfo.setPassword(AES.encrypt(employeeInfoDTO.getPassword(), AES.generateKey()));
			employeeInfo.setFatherName(employeeInfoDTO.getFatherName());
			employeeInfo.setContactNo(employeeInfoDTO.getContactNo());
			employeeInfo.setEmailId(employeeInfoDTO.getEmailId());
			employeeInfo.setHomePhoneNo(employeeInfoDTO.getHomePhoneNo());
			employeeInfo.setPassportNo(employeeInfoDTO.getPassportNo());
			employeeInfo.setPanCardNo(employeeInfoDTO.getPanCardNo());
			employeeInfo.setClientRegistrationInfo(clientRegInfo);
			employeeInfo.setReportingManager(empManagerInfo);
		} catch (Exception e) {
			LOGGER.errorf("Error in Password Exception : ", e);
			e.printStackTrace();
		}

		return employeeInfo;
	}

	public EmployeeInfo createEmployee(EmployeeCreationDTO employeeCreationDTO) {
		EmployeeInfo employeeInfo = new EmployeeInfo();

		EmployeeInfo employeeInfoSaved = null;
		try {
			ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
					.clientRegistrationInfoByClientCode(employeeCreationDTO.getClientCode());

			EmployeeInfo empManagerInfo = null;
			if (employeeCreationDTO.getManagerCode() != null) {
				empManagerInfo = employeeInfoRepository.findByEmpCode(employeeCreationDTO.getManagerCode());
			}
			employeeInfo.setEmpCode(employeeCreationDTO.getEmpCode());
			employeeInfo.setFirstName(employeeCreationDTO.getFirstName());
			employeeInfo.setLastName(employeeCreationDTO.getLastName());
			employeeInfo.setPassword(AES.encrypt(employeeCreationDTO.getPassword(), AES.generateKey()));
			employeeInfo.setContactNo(employeeCreationDTO.getContactNo());
			employeeInfo.setClientRegistrationInfo(clientRegInfo);
			employeeInfo.setReportingManager(empManagerInfo);

			employeeInfoSaved = employeeInfoRepository.save(employeeInfo);
		} catch (Exception e) {
			LOGGER.errorf("Error in Passowrd Exception : ", e);
			e.printStackTrace();
		}

		return employeeInfoSaved;
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

		responseEmployeeInfoDTO.setEmpCode(employeeInfoSaved.getEmpCode());
		responseEmployeeInfoDTO.setCreatedDate(employeeInfoSaved.getCreatedDate());
		responseEmployeeInfoDTO.setFirstName(employeeInfoSaved.getFirstName());
		responseEmployeeInfoDTO.setMiddleName(employeeInfoSaved.getMiddleName());
		responseEmployeeInfoDTO.setLastName(employeeInfoSaved.getLastName());
		responseEmployeeInfoDTO.setDesignation(employeeInfoSaved.getDesignation());
		responseEmployeeInfoDTO.setHireDate(employeeInfoSaved.getHireDate());
		responseEmployeeInfoDTO.setCurrSalary(employeeInfoSaved.getCurrSalary());
		responseEmployeeInfoDTO.setDob(employeeInfoSaved.getDob());
		responseEmployeeInfoDTO.setPassword(employeeInfoSaved.getPassword());
		responseEmployeeInfoDTO.setFatherName(employeeInfoSaved.getFatherName());
		responseEmployeeInfoDTO.setContactNo(employeeInfoSaved.getContactNo());
		responseEmployeeInfoDTO.setEmailId(employeeInfoSaved.getEmailId());
		responseEmployeeInfoDTO.setHomePhoneNo(employeeInfoSaved.getHomePhoneNo());
		responseEmployeeInfoDTO.setPassportNo(employeeInfoSaved.getPassportNo());
		responseEmployeeInfoDTO.setPanCardNo(employeeInfoSaved.getPanCardNo());
		responseEmployeeInfoDTO.setClientCode(employeeInfoSaved.getClientRegistrationInfo().getClientCode());
		if (employeeInfoSaved.getReportingManager() != null) {
			responseEmployeeInfoDTO.setManagerCode(employeeInfoSaved.getReportingManager().getEmpCode());

		}

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

		return responseEmployeeInfoDTO;
	}

	@Override
	public EmployeeInfo employeeLogin(String empCode, String password) {

		try {
			String pass = AES.encrypt(password, AES.generateKey());

			EmployeeInfo employeeInfoOpt = employeeInfoRepository.findByEmpCode(empCode);
			if (employeeInfoOpt != null) {
				if (employeeInfoOpt.getEmpCode().equals(empCode) && employeeInfoOpt.getPassword().equals(password)) {
					return employeeInfoOpt;
				}
			}

		} catch (Exception e) {
			LOGGER.errorf("Error in Passowrd Exception : ", e);
			e.printStackTrace();
		}

		return null;
	}

	@Override
	public List<EmployeeInfo> getEmployeeManagerList() {
		List<EmployeeInfo> empList = employeeInfoRepository.getEmployeeManagerList();

		return empList;
	}

	@Override
	public List<EmployeeInfo> getEmployeeByManagerEmpCode(String managerCode) {
		List<EmployeeInfo> empList = employeeInfoRepository.getEmployeeByManagerEmpCode(managerCode);
		return empList;
	}

	@Override
	public List<EmployeeInfo> getAllEmployeeInfoByClientCode(String clientCode) {
		List<EmployeeInfo> empList = employeeInfoRepository.getAllEmployeeInfoByClientCode(clientCode);
		return empList;
	}

}
