package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.model.AdminLogin;
import com.intranet.repository.ClientRegistrationInfoRepository;

@Service
public class ClientRegistrationInfoServiceImpl implements ClientRegistrationInfoService {

	@Autowired
	private ClientRegistrationInfoRepository clientRegistrationInfoRepository;

	@Override
	public List<ClientRegistrationInfo> findAll() {
		return clientRegistrationInfoRepository.findAll();
	}

	@Override
	public ClientRegistrationInfo save(ClientRegistrationInfo clientRegistrationInfo) {
		return clientRegistrationInfoRepository.save(clientRegistrationInfo);
	}

	@Override
	public Optional<ClientRegistrationInfo> findById(String id) {
		return clientRegistrationInfoRepository.findById(id);
	}

	@Override
	public void deleteById(String id) {
		clientRegistrationInfoRepository.deleteById(id);
	}

	@Override
	public ClientRegistrationInfo clientRegistrationInfoByClientCode(String clientCode) {
		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoRepository
				.clientRegistrationInfoByClientCode(clientCode);
		return clientRegInfo;
	}

	@Override
	public boolean adminLogin(String companyEmail, String password) {
		ClientRegistrationInfo clientRegInfo = clientRegistrationInfoRepository
				.getClientInfoByEmailId(companyEmail);
		if (clientRegInfo.getCompanyEmail().equals(companyEmail)
				&& clientRegInfo.getPassowrd().equals(password)) {
			return true;
		}

		return false;
	}

}
