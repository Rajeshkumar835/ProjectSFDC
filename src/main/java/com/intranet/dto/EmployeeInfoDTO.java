package com.intranet.dto;

import java.util.List;

import com.intranet.entity.AddressInfo;
import com.intranet.entity.BankInfo;
import com.intranet.entity.CurrentExperience;
import com.intranet.entity.EmployeeInfo;
import com.intranet.entity.PreviousExperience;
import com.intranet.entity.QualificationInfo;
import com.intranet.entity.ReportingManager;

import lombok.Data;

@Data
public class EmployeeInfoDTO {

	private EmployeeInfo employeeInfo;

	private List<QualificationInfo> qualificationInfo;

	private List<BankInfo> bankInfo;

	private List<AddressInfo> addressInfo;

	private List<CurrentExperience> currentExperience;

	private List<PreviousExperience> previousExperience;

	private ReportingManager reportingManager;

}
