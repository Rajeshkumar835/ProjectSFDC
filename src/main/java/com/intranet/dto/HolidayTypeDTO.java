package com.intranet.dto;

import java.util.Date;

import lombok.Data;

@Data
public class HolidayTypeDTO {

	private Long holidayId;

	private Date createdDate;

	private String holidayCode;

	private String holidayName;

	private String clientCode;

}
