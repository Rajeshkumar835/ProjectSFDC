package com.intranet.service;

import java.util.List;
import java.util.Optional;

import com.intranet.entity.BankInfo;

public interface BankInfoService {

	public List<BankInfo> findAll();

	public BankInfo save(BankInfo addressInfo);

	public Optional<BankInfo> findById(Long id);

	public void deleteById(Long id);

}
