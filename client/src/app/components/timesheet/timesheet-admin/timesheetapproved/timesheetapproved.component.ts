import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
@Component({
  selector: "app-timesheetapproved",
  templateUrl: "./timesheetapproved.component.html",
  styleUrls: ["./timesheetapproved.component.scss"],
})
export class TimesheetapprovedComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  //constructor(public datepipe: DatePipe) {}
  //, public datepipe: DatePipe
  //start date and end date part this is the part of approval/
  StartDate: Date;
  StartRegisterForm;
  EndDate: Date;
  //EndRegisterForm;

  ngOnInit() {
    //start date and end date part this is the part of approval/

    this.StartDate = new Date();

    /* this.datepipe.transform(this.StartDate, "dd/MM/yyyy");  */
    this.StartRegisterForm = this.formBuilder.group({
      StartDate: "",
      EndDate: "",
    });

    console.log(this.StartDate);
    console.log(this.StartRegisterForm);

    console.log(this.EndDate);
    console.log(this.StartRegisterForm);
  }
  onSubmit(){
    
  }
}