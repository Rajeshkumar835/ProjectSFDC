package com.intranet.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class CreateEmployee {

	@Id
	private String empCode;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = true)
	private String empName;

	@Column(nullable = true)
	private String contactNo;

	@Column(nullable = true, updatable = true)
	private String dob;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "clientCode")
	private ClientRegistrationInfo clientRegistrationInfo;

}
