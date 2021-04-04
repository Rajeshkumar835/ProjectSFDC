package com.intranet.service;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;
import java.util.Optional;

import javax.crypto.NoSuchPaddingException;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intranet.entity.ClientRegistrationInfo;
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
		} catch (NoSuchAlgorithmException e) {
			LOGGER.errorf("Error in Password NoSuchAlgorithm Exception : ", e);
			e.printStackTrace();
		} catch (NoSuchPaddingException e) {
			LOGGER.errorf("Error in Password NoSuchPadding Exception : ", e);
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			LOGGER.errorf("Error in Password InvalidKeySpec Exception : ", e);
			e.printStackTrace();
		} catch (Exception e) {
			LOGGER.errorf("Error in Passowrd Exception : ", e);
			e.printStackTrace();
		}

		ClientRegistrationInfo clientRegistrationInfoSaved = clientRegistrationInfoRepository.save(clientRegistration);

		return clientRegistrationInfoSaved;
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
	public ClientRegistrationInfo adminLogin(String companyEmail, String password) {

		try {
			String pass = AES.encrypt(password, AES.generateKey());

			ClientRegistrationInfo clientRegInfo = clientRegistrationInfoRepository
					.getClientInfoByEmailId(companyEmail);
			if (clientRegInfo.getCompanyEmail().equals(companyEmail) && clientRegInfo.getPassword().equals(pass)) {
				ClientRegistrationInfo clientRegistrationInfo = clientRegistrationInfoRepository
						.getClientInfoByEmailId(companyEmail);
				return clientRegistrationInfo;
			}
		} catch (NoSuchAlgorithmException e) {
			LOGGER.errorf("Error in Password NoSuchAlgorithm Exception : ", e);
			e.printStackTrace();
		} catch (NoSuchPaddingException e) {
			LOGGER.errorf("Error in Password NoSuchPadding Exception : ", e);
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			LOGGER.errorf("Error in Password InvalidKeySpec Exception : ", e);
			e.printStackTrace();
		} catch (Exception e) {
			LOGGER.errorf("Error in Passowrd Exception : ", e);
			e.printStackTrace();
		}

		return null;
	}

}
