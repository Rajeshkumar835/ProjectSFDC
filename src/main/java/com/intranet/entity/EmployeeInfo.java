package com.intranet.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class EmployeeInfo {

	@Id
	private String empCode;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = true)
	private String firstName;

	@Column(nullable = true)
	private String middleName;

	@Column(nullable = true)
	private String lastName;

	@Column(nullable = true)
	private String designation;

	@Column(nullable = true, updatable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date hireDate;

	@Column(nullable = true)
	private double currSalary;

	@Column(nullable = true, updatable = true)
	@Temporal(TemporalType.TIMESTAMP)
	private Date dob;

	@Column(nullable = true)
	private String fatherName;

	@Column(nullable = true)
	private String contactNo;
	
	@Column(nullable = true)
	private String emailId;

	@Column(nullable = true)
	private String homePhoneNo;

	@Column(nullable = true)
	private String passportNo;

	@Column(nullable = true)
	private String panCardNo;
	
	@ManyToOne
	@JoinColumn(name = "clientCode")
	private ClientInfo clientInfo;

	@OneToMany(mappedBy = "employeeInfo")
	private List<QualificationInfo> qualificationInfo;

	@OneToMany(mappedBy = "employeeInfo")
	private List<BankInfo> bankInfo;

	@OneToMany(mappedBy = "employeeInfo")
	private List<AddressInfo> addressInfo;

	@OneToMany(mappedBy = "employeeInfo")
	private List<CurrentExperience> currentExperience;

	@OneToMany(mappedBy = "employeeInfo")
	private List<PreviousExperience> previousExperience;

	@OneToOne(mappedBy = "employeeInfo")
	private ReportingManager reportingManager;

}
