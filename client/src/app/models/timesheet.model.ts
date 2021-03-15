export class Timesheet {
    public attedanceDate: string;
    public empCode: string;
    public empName: string;
    public status: string;
    public totalTimeHour: number;
    public timesheetDetails:TimesheetDetails;
}
export class TimesheetDetails{
    public comments: string;
    public hour: number;
    public project: string;
}
