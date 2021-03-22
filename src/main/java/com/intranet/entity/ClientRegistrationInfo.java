package com.intranet.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class ClientRegistrationInfo {

	@Id
	private String clientCode;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = true)
	private String companyName;

	@Column(nullable = true)
	private String website;

	@Column(nullable = true)
	private String companyEmail;

	@Column(nullable = true)
	private String companyLocation;

	@Column(nullable = true)
	private String companyTinVatNo;

	@Column(nullable = true)
	private String passowrd;

}
