package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.ClientInfo;
import com.intranet.repository.ClientInfoRepository;

@Service
public class ClientInfoServiceImpl implements ClientInfoService {

	@Autowired
	private ClientInfoRepository clientInfoRepository;

	@Override
	public List<ClientInfo> findAll() {
		return clientInfoRepository.findAll();
	}

	@Override
	public ClientInfo save(ClientInfo clientInfo) {
		return clientInfoRepository.save(clientInfo);
	}

	@Override
	public Optional<ClientInfo> findById(String id) {
		return clientInfoRepository.findById(id);
	}

	@Override
	public void deleteById(String id) {
		clientInfoRepository.deleteById(id);
	}

}
