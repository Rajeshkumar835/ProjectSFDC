package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.dto.CreateEmployeeDTO;
import com.intranet.dto.EmployeeInfoDTO;
import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.entity.CreateEmployee;
import com.intranet.repository.CreateEmployeeRepository;

@Service
public class CreateEmployeeServiceImpl implements CreateEmployeeService {

	@Autowired
	private CreateEmployeeRepository createEmployeeRepository;

	@Autowired
	private ClientRegistrationInfoService clientRegistrationInfoService;

	@Autowired
	private EmployeeInfoService employeeInfoService;

	@Override
	public CreateEmployee add(CreateEmployeeDTO leaveInfoDTO) {
		CreateEmployee createEmployeeObject = transformObject(leaveInfoDTO, new CreateEmployee());

		CreateEmployee createEmployeeSaved = createEmployeeRepository.save(createEmployeeObject);
		return createEmployeeSaved;
	}

	private CreateEmployee transformObject(CreateEmployeeDTO createEmployeeDTO, CreateEmployee createEmployee) {

		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoService
				.clientRegistrationInfoByClientCode(createEmployeeDTO.getClientCode());

		createEmployee.setEmpCode(createEmployeeDTO.getEmpCode());
		createEmployee.setCreatedDate(createEmployeeDTO.getCreatedDate());
		createEmployee.setEmpName(createEmployeeDTO.getEmpName());
		createEmployee.setContactNo(createEmployeeDTO.getContactNo());
		createEmployee.setDob(createEmployeeDTO.getDob());
		createEmployee.setClientRegistrationInfo(clientRegInfo);

		return createEmployee;
	}

	@Override
	public List<CreateEmployee> findAll() {
		return createEmployeeRepository.findAll();
	}

	@Override
	public CreateEmployee save(CreateEmployee leaveInfo) {
		return createEmployeeRepository.save(leaveInfo);
	}

	@Override
	public Optional<CreateEmployee> findById(String id) {
		return createEmployeeRepository.findById(id);
	}

	@Override
	public void deleteById(String empCode) {
		createEmployeeRepository.deleteById(empCode);
	}

	@Override
	public CreateEmployee findByEmpCode(String leaveCode) {
		CreateEmployee leaveInfo = createEmployeeRepository.findByLeaveCode(leaveCode);
		if (leaveInfo == null) {
			return new CreateEmployee();
		}
		return leaveInfo;
	}

	@Override
	public EmployeeInfoDTO employeeLogin(String empCode, String password) {
		Optional<CreateEmployee> createEmployee = createEmployeeRepository.findById(empCode);
		if (createEmployee.isPresent()) {
			CreateEmployee cEmp = createEmployee.get();
			if (cEmp.getEmpCode().equals(empCode) && cEmp.getDob().equals(password)) {
				EmployeeInfoDTO empInfoDTO = employeeInfoService.findByEmpCode(empCode);
				return empInfoDTO;
			}
		}
		return null;
	}

}
