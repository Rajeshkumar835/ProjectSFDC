import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.scss']
})
export class CompletedCoursesComponent implements OnInit {

  dummyObjForCourse=[
  
    // {
    //   name:"Python",
    //   title:"Python course",
    //   desc:"this is Python course",
    //   img:""
  
    // },
    {
      name:"Blockchain",
      title:"Blockchain course",
      desc:"this is Blockchain course",
      img:"../../../../assets/blockchain.png"
  
    },
   
  ]
  constructor() { }

  ngOnInit() {
  }

}
