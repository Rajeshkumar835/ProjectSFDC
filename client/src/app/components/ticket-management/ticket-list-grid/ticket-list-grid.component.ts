import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TicketWithUser } from '../../../models';
@Component({
  selector: 'app-ticket-list-grid',
  templateUrl: './ticket-list-grid.component.html',
  styleUrls: ['./ticket-list-grid.component.scss']
})
export class TicketListGridComponent implements OnInit {

  @Input() ticketsWithUsers: TicketWithUser[];
  @Input() isLoading: boolean;

  @Output() view = new EventEmitter<number>();
  @Output() assign = new EventEmitter<number>();
  @Output() complete = new EventEmitter<{ticketId: number, originalStatus: boolean}>();

  constructor() {}

  ngOnInit() {}

}
