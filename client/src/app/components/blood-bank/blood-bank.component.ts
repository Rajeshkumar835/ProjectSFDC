import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-blood-bank",
  templateUrl: "./blood-bank.component.html",
  styleUrls: ["./blood-bank.component.scss"],
})
export class BloodBankComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  Bloods = new FormControl();
  Bottles = new FormControl();
  BloodList = ["A+", "B+", "o+", "AB+", "A-", "B-", "O-", "AB-"];
  selectedBlood;
  BottlesList = ["3", "8", "2", "5", "1", "6", "8", "3"];
  slecteBottle;
  bloodType;
  bottleValue;
  bloodItem: boolean = false;

  choosebottle(value) {
    this.bloodType = value;
    console.log("leave value2 is", this.bloodType);
  }
  chooseBlood(value) {
    this.bottleValue = value;
    console.log("leave value2 is", this.bottleValue);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
