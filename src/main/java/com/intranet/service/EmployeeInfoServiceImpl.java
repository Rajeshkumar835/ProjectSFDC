package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.EmployeeInfo;
import com.intranet.repository.EmployeeInfoRepository;

@Service
public class EmployeeInfoServiceImpl implements EmployeeInfoService {

	@Autowired
	private EmployeeInfoRepository employeeInfoRepository;
	
	@Override
	public EmployeeInfo add(EmployeeInfo employeeInfoModel) {
		
		EmployeeInfo employeeInfo = null;
		
		employeeInfo.setEmpCode(employeeInfoModel.getEmpCode());
		employeeInfo.setFirstName(employeeInfoModel.getFirstName());
		employeeInfo.setMiddleName(employeeInfoModel.getMiddleName());
		employeeInfo.setLastName(employeeInfoModel.getLastName());
		employeeInfo.setDesignation(employeeInfoModel.getDesignation());
		employeeInfo.setHireDate(employeeInfoModel.getHireDate());
		employeeInfo.setCurrSalary(employeeInfoModel.getCurrSalary());
		employeeInfo.setDob(employeeInfoModel.getDob());
		employeeInfo.setFatherName(employeeInfoModel.getFatherName());
		employeeInfo.setContactNo(employeeInfoModel.getContactNo());
		employeeInfo.setEmailId(employeeInfoModel.getEmailId());
		employeeInfo.setHomePhoneNo(employeeInfoModel.getHomePhoneNo());
		employeeInfo.setPassportNo(employeeInfoModel.getPassportNo());
		employeeInfo.setPanCardNo(employeeInfoModel.getPanCardNo());
		
		employeeInfoRepository.save(employeeInfo);
		
		


		return null;
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



}
