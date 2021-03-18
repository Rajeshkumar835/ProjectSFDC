import { Component, OnInit } from "@angular/core";
import { user } from "./user";
import { FormBuilder, FormGroup, FormsModule } from "@angular/forms";
@Component({
  selector: "app-timefilltimesheet",
  templateUrl: "./timefilltimesheet.component.html",
  styleUrls: ["./timefilltimesheet.component.scss"],
})
export class TimefilltimesheetComponent implements OnInit {
  users: user[];

  FillDate: Date;
  registerForm;
  constructor(private formBuilder: FormBuilder) {
    console.log(this.FillDate);
    console.log(this.registerForm);
  }

  ngOnInit() {
    this.users = [
      { Id: 1, Name: "Ashutosh kumar yadav" },
      { Id: 2, Name: "Amish Yadav" },
      { Id: 3, Name: "Satish jee" },
      { Id: 4, Name: "Ujwal jee" },
    ];

    this.FillDate = new Date();
    this.registerForm = this.formBuilder.group({
      FillDate: "",
    });
    console.log(this.FillDate);
    console.log(this.registerForm);
  }
}
