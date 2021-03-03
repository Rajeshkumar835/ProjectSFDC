package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.AddressInfo;

public interface AddressInfoService {

	public List<AddressInfo> findAll();

	public AddressInfo save(AddressInfo addressInfo);

	public Optional<AddressInfo> findById(Long id);

	public void deleteById(Long id);

}
