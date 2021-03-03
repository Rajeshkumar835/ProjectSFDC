package com.intranet.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class ClientInfo {

	@Id
	private String clientCode;

	@Column(nullable = true)
	private String companyName;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;
	
	@OneToMany(mappedBy="clientInfo")
	private List<EmployeeInfo> employeeInfo;

}
