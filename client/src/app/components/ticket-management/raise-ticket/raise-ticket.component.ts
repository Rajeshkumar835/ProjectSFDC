import { Component, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.scss'],
})
export class RaiseTicketComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  category = ["Hardware", "Software"];
  subCategoryList = [
    {name:"os issue", category:"Hardware"},
    {name:"cable damaged", category:"Hardware"},
    {name:"Error", category:"Software"},
    {name:"Module not working", category:"Software"},
    {name:"Not reprodusable", category:"Software"},
    {name:"other issue", category:"Software"},
];

chatArray=[{
  user:[{name:"", Comment:""}],
  emp:[{name:"", Comment:""}]
}];
chatArraySecondIdea=[{
  user:[{name:"", Comment:""}],
  emp:[{name:"", Comment:""}]
}];
chatArraythirdIdea=[];
  subCategory;
  ticketFormData;
  formSectionFor1=true;
  editTicketData=false;
  empReplyForm=false;
  constructor() {}

  ngOnInit() {}
  raiseTicketFunction(ticketForm) {
    console.log('form data', ticketForm.value)
    this.ticketFormData=ticketForm.value;
    console.log("ticket form data", this.ticketFormData)
    this.formSectionFor1=false;
    this.editTicketData=false;
    console.log("not true",!this.formSectionFor1)
    console.log("not not false",this.formSectionFor1)
    localStorage.setItem("raisedTicket", JSON.stringify(this.ticketFormData))
  }
  categorySelected(event) {
    console.log('selected option', event)
   let selected = this.subCategoryList.filter((value)=> value.category==event)
   this.subCategory=selected;
    console.log("console of subcategory", this.subCategory)
  }
  subCategorySelected(event){
    console.log("sub category selected", event)
  }
  editTicket(ticketNumber){
    this.editTicketData=true;

  }
  replyTicket(){
    this.empReplyForm=true;
  }

  empReplyForTicket(ticketReplyForm){
    console.log("data received in emp reply on a ticket", ticketReplyForm);
    this.chatArraythirdIdea.push(ticketReplyForm.value)
    console.log("chatArraythirdIdea", this.chatArraythirdIdea)
  }
  public onSave() {
    this.closebutton.nativeElement.click();
  }
}
