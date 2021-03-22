package com.intranet.dto;

import java.util.Date;

import lombok.Data;

@Data
public class CompanyHolidayListDTO {

	private Long id;

	private Date createdDate;

	private String holidayName;
	
	private Date holidayDate;

	private Long holidayId;

}
