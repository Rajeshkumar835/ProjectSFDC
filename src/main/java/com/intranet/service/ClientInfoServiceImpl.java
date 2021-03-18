package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.repository.ClientInfoRepository;

@Service
public class ClientInfoServiceImpl implements ClientInfoService {

	@Autowired
	private ClientInfoRepository clientInfoRepository;

	@Override
	public List<ClientRegistrationInfo> findAll() {
		return clientInfoRepository.findAll();
	}

	@Override
	public ClientRegistrationInfo save(ClientRegistrationInfo clientRegistrationInfo) {
		return clientInfoRepository.save(clientRegistrationInfo);
	}

	@Override
	public Optional<ClientRegistrationInfo> findById(String id) {
		return clientInfoRepository.findById(id);
	}

	@Override
	public void deleteById(String id) {
		clientInfoRepository.deleteById(id);
	}

}
