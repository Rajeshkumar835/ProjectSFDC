import { Component, OnInit, ViewChild, defineInjectable } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-leavemanagement",
  templateUrl: "./leavemanagement.component.html",
  styleUrls: ["./leavemanagement.component.scss"],
})
export class LeavemanagementComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: "Apply Leave",
        link: "./ApplyLeaveInfo",
        index: 0,
      },
      {
        label: "Leave Approval",
        link: "./ManagerViewLeaveInfo",
        index: 1,
      },
      {
        label: "Leave Detail",
        link: "./employeeOwnLeaveInfo",
        index: 2,
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(
        this.routeLinks.find((tab) => tab.link === "." + this.router.url)
      );
    });
  }
  getActiveClass(indexOfRouteLink) {
    let tabsclass = "mat-tab-link";
    if (this.activeLinkIndex === indexOfRouteLink) {
      tabsclass = "mat-tab-link mat-tab-label-active";
    }

    return tabsclass;
  }
}
