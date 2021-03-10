package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.BankInfo;
import com.intranet.repository.BankInfoRepository;

@Service
public class BankInfoServiceImpl implements BankInfoService {

	@Autowired
	private BankInfoRepository bankInfoRepository;

	@Override
	public List<BankInfo> findAll() {
		return bankInfoRepository.findAll();
	}

	@Override
	public BankInfo save(BankInfo bankInfo) {
		return bankInfoRepository.save(bankInfo);
	}

	@Override
	public Optional<BankInfo> findById(Long id) {
		return bankInfoRepository.findById(id);
	}

	@Override
	public void deleteById(Long id) {
		bankInfoRepository.deleteById(id);
	}

}
