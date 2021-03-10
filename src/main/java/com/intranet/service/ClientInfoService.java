package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.ClientInfo;

public interface ClientInfoService {

	public List<ClientInfo> findAll();

	public ClientInfo save(ClientInfo clientInfo);

	public Optional<ClientInfo> findById(String id);

	public void deleteById(String id);

}
