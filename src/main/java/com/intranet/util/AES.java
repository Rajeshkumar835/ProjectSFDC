package com.intranet.util;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import org.jboss.logging.Logger;
import org.springframework.stereotype.Service;

// TODO: Auto-generated Javadoc
/**
 * The Class RSA.
 */
@Service
public class AES {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = Logger.getLogger(AES.class);

	/** The cipher. */
	static Cipher cipher;

	/**
	 * Generate key.
	 *
	 * @return the secret key
	 * @throws NoSuchAlgorithmException the no such algorithm exception
	 * @throws NoSuchPaddingException   the no such padding exception
	 * @throws InvalidKeySpecException
	 */
	public static SecretKey generateKey()
			throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeySpecException {
		char[] iv = { 22, 13, 74, 14, 92, 112, 95, 63, 112, 26, 18, 37, 75, 9, 29, 65 };

		SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
		KeySpec spec = new PBEKeySpec(iv, "AES".getBytes(), 65536, 256);
		SecretKey tmp = factory.generateSecret(spec);
		SecretKeySpec secretKey = new SecretKeySpec(tmp.getEncoded(), "AES");
		LOGGER.info("secretKey" + secretKey);
		return secretKey;
	}

	/**
	 * Encrypt.
	 *
	 * @param plainText the plain text
	 * @param secretKey the secret key
	 * @return the string
	 * @throws Exception the exception
	 */
	public static String encrypt(String plainText, SecretKey secretKey) throws Exception {
		byte[] plainTextByte = plainText.getBytes();
		cipher = Cipher.getInstance("AES");
		cipher.init(Cipher.ENCRYPT_MODE, secretKey);
		byte[] encryptedByte = cipher.doFinal(plainTextByte);
		Base64.Encoder encoder = Base64.getEncoder();
		String encryptedText = encoder.encodeToString(encryptedByte);
		return encryptedText;
	}

	/**
	 * Decrypt.
	 *
	 * @param encryptedText the encrypted text
	 * @param secretKey     the secret key
	 * @return the string
	 * @throws Exception the exception
	 */
	public static String decrypt(String encryptedText, SecretKey secretKey) throws Exception {
		Base64.Decoder decoder = Base64.getDecoder();
		byte[] encryptedTextByte = decoder.decode(encryptedText);
		cipher = Cipher.getInstance("AES");
		cipher.init(Cipher.DECRYPT_MODE, secretKey);
		byte[] decryptedByte = cipher.doFinal(encryptedTextByte);
		String decryptedText = new String(decryptedByte);
		return decryptedText;
	}

	public static void main(String[] arg) throws Exception {
		// 2RR45mNGAbQYiNid5/CVBA==
		SecretKey sk = generateKey();
		String dc = decrypt("xYsxGMl3B21XTR/Jw3zKcw==", sk);

		System.out.println(dc);
	}

	private static final String ALPHA_NUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	public static String randomAlphaNumeric(int count) {
		StringBuilder builder = new StringBuilder();
		while (count-- != 0) {
			int character = (int) (Math.random() * ALPHA_NUMERIC_STRING.length());
			builder.append(ALPHA_NUMERIC_STRING.charAt(character));
		}
		return builder.toString();
	}
}
