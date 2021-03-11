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
      { Id: 2, Name: "Joaaaaaaaaaaaaaaaaahn" },
      { Id: 3, Name: "ASaaaaaaaaaaaaaahutosh" },
      { Id: 4, Name: "Anaaaaaaaaaaaaaaaaju" },
    ];

    this.FillDate = new Date();
    this.registerForm = this.formBuilder.group({
      FillDate: "",
    });
    console.log(this.FillDate);
    console.log(this.registerForm);
  }
}