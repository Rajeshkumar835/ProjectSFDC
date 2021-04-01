package com.intranet.dto;

import java.util.List;

import com.intranet.entity.Timesheet;
import com.intranet.entity.TimesheetDetails;

import lombok.Data;

@Data
public class TimesheetDTO {

	private Timesheet timesheet;

	private List<TimesheetDetails> timesheetDetails;

}
