import { Component, TemplateRef,OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-company-holiday-modal',
  templateUrl: './company-holiday-modal.component.html',
  styleUrls: ['./company-holiday-modal.component.scss']
})
export class CompanyHolidayModalComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
