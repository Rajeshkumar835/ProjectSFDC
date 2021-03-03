package com.intranet.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class AddressInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = false)
	private String addressType;

	@Column(nullable = false)
	private String addressLine1;

	@Column(nullable = false)
	private String addressLine2;

	@Column(nullable = false)
	private String city;

	@Column(nullable = false)
	private String state;

	@Column(nullable = false)
	private String country;

	@Column(nullable = false)
	private String zipCode;

	@ManyToOne
	@JoinColumn(name = "empCode", nullable = false)
	private EmployeeInfo employeeInfo;
}
