export class Timesheet {
  public attedanceDate: Date;
  public empCode: string;
  public empName: string;
  public status: string;
  public totalTimeHour: number;
}
export class TimesheetDetails {
  public comments: string;
  public hour: number;
  public project: string;
}
export class TimesheetObject {
  public timesheet: Timesheet;
  public timesheetDetails: Array<TimesheetDetails>;
}
