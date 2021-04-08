package com.intranet.service;

import java.util.List;
import java.util.Optional;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.ClientRegistrationInfo;
import com.intranet.model.AdminLogin;
import com.intranet.repository.ClientRegistrationInfoRepository;
import com.intranet.util.AES;

@Service
public class ClientRegistrationInfoServiceImpl implements ClientRegistrationInfoService {

	private static final Logger LOGGER = Logger.getLogger(ClientRegistrationInfoServiceImpl.class);

	@Autowired
	private ClientRegistrationInfoRepository clientRegistrationInfoRepository;

	@Override
	public List<ClientRegistrationInfo> findAll() {
		return clientRegistrationInfoRepository.findAll();
	}

	@Override
	public ClientRegistrationInfo save(ClientRegistrationInfo clientRegistrationInfo) {

		ClientRegistrationInfo clientRegistration = new ClientRegistrationInfo();
		try {
			clientRegistration.setClientCode(clientRegistrationInfo.getClientCode());
			clientRegistration.setCompanyEmail(clientRegistrationInfo.getCompanyEmail());
			clientRegistration.setCompanyLocation(clientRegistrationInfo.getCompanyLocation());
			clientRegistration.setCompanyName(clientRegistrationInfo.getCompanyName());
			clientRegistration.setCompanyTinVatNo(clientRegistrationInfo.getCompanyTinVatNo());
			clientRegistration.setCreatedDate(clientRegistrationInfo.getCreatedDate());
			clientRegistration.setWebsite(clientRegistrationInfo.getWebsite());

			clientRegistration.setPassword(AES.encrypt(clientRegistrationInfo.getPassword(), AES.generateKey()));
		} catch (Exception e) {
			LOGGER.errorf("Error in Passowrd Exception : ", e);
			e.printStackTrace();
		}

		ClientRegistrationInfo clientRegistrationInfoSaved = clientRegistrationInfoRepository.save(clientRegistration);

		return clientRegistrationInfoSaved;
	}

	@Override
	public ClientRegistrationInfo update(ClientRegistrationInfo clientRegistrationInfo, String code) {

		Optional<ClientRegistrationInfo> clientRegistrationInfoOptional = clientRegistrationInfoRepository
				.findById(code);
		if (clientRegistrationInfoOptional.isPresent()) {

			ClientRegistrationInfo clientRegistration = new ClientRegistrationInfo();

			clientRegistration.setClientCode(code);
			clientRegistration.setCompanyEmail(clientRegistrationInfo.getCompanyEmail());
			clientRegistration.setCompanyLocation(clientRegistrationInfo.getCompanyLocation());
			clientRegistration.setCompanyName(clientRegistrationInfo.getCompanyName());
			clientRegistration.setCompanyTinVatNo(clientRegistrationInfo.getCompanyTinVatNo());
			clientRegistration.setCreatedDate(clientRegistrationInfo.getCreatedDate());
			clientRegistration.setWebsite(clientRegistrationInfo.getWebsite());
			clientRegistration.setPassword(clientRegistrationInfoOptional.get().getPassword());

			return clientRegistrationInfoRepository.save(clientRegistration);
		}
		return null;
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
	public ClientRegistrationInfo adminLogin(AdminLogin adminLogin) {

		try {
			String pass = AES.encrypt(adminLogin.getPassword(), AES.generateKey());

			ClientRegistrationInfo clientRegInfo = clientRegistrationInfoRepository
					.getClientInfoByEmailId(adminLogin.getCompanyEmail());
			if (clientRegInfo.getCompanyEmail().equals(adminLogin.getCompanyEmail())
					&& clientRegInfo.getPassword().equals(pass)) {
				ClientRegistrationInfo clientRegistrationInfo = clientRegistrationInfoRepository
						.getClientInfoByEmailId(adminLogin.getCompanyEmail());
				String decryptPass = AES.decrypt(pass, AES.generateKey());
				clientRegistrationInfo.setPassword(decryptPass);
				return clientRegistrationInfo;
			}
		} catch (Exception e) {
			LOGGER.errorf("Error in Passowrd Exception : ", e);
			e.printStackTrace();
		}

		return null;
	}

	@Override
	public ClientRegistrationInfo changeAdminPassword(AdminLogin adminLogin) {
		ClientRegistrationInfo clientRegInfo = new ClientRegistrationInfo();
		try {
			String pass = AES.encrypt(adminLogin.getPassword(), AES.generateKey());

			clientRegInfo = clientRegistrationInfoRepository.getClientInfoByEmailId(adminLogin.getCompanyEmail());

			clientRegInfo.setPassword(pass);

			clientRegistrationInfoRepository.save(clientRegInfo);

		} catch (Exception e) {
			LOGGER.errorf("Error in Passowrd Exception : ", e);
			e.printStackTrace();
		}
		return clientRegInfo;

	}

}
