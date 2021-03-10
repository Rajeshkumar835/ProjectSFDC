package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.AddressInfo;
import com.intranet.repository.AddressInfoRepository;

@Service
public class AddressInfoServiceImpl implements AddressInfoService {

	@Autowired
	private AddressInfoRepository addressInfoRepository;

	@Override
	public List<AddressInfo> findAll() {
		return addressInfoRepository.findAll();
	}

	@Override
	public AddressInfo save(AddressInfo addressInfo) {
		return addressInfoRepository.save(addressInfo);
	}

	@Override
	public Optional<AddressInfo> findById(Long id) {
		return addressInfoRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		addressInfoRepository.deleteById(id);
	}

}
