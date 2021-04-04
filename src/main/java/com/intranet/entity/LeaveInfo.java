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
public class LeaveInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = true)
	private String leaveCode;

	@Column(nullable = true)
	private String leaveName;

	@Column(nullable = true)
	private Long leaveLimit;

	@Column(nullable = true)
	private String clientCode;

//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "clientCode")
//	private ClientRegistrationInfo clientRegistrationInfo;

}
