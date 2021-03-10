package com.intranet.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class BankInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = true)
	private String bankType;

	@Column(nullable = true)
	private String bankName;

	@Column(nullable = true)
	private String bankAccNo;

	@Column(nullable = true)
	private String bankAddress;

	@Column(nullable = true)
	private String routingNumber;

	@Column(nullable = true)
	private String ifsCode;

	@Column(nullable = true)
	private boolean isActive;
	
	@Column(nullable = true)
	private String empCode;

//	@ManyToOne
//	@JoinColumn(name = "empCode")
//	private EmployeeInfo employeeInfo;

}
