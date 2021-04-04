package com.intranet.entity;

import java.util.Date;

import javax.persistence.CascadeType;
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
public class HolidayType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long holidayId;

	@Column(updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	private Date createdDate;

	@Column(nullable = true)
	private String holidayCode;

	@Column(nullable = true)
	private String holidayName;
	
	private String clientCode; 

//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "clientCode")
//	private ClientRegistrationInfo clientRegistrationInfo;

}
