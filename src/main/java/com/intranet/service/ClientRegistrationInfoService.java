package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.ClientRegistrationInfo;

public interface ClientRegistrationInfoService {

	public List<ClientRegistrationInfo> findAll();

	public ClientRegistrationInfo save(ClientRegistrationInfo clientRegistrationInfo);

	public Optional<ClientRegistrationInfo> findById(String id);

	public void deleteById(String id);

	public ClientRegistrationInfo clientRegistrationInfoByClientCode(String clientCode);

}