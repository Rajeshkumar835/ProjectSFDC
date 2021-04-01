import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ongoing-courses',
  templateUrl: './ongoing-courses.component.html',
  styleUrls: ['./ongoing-courses.component.scss']
})
export class OngoingCoursesComponent implements OnInit {

  dummyObjForCourse=[
  
  {
    name:"Python",
    title:"Python course",
    desc:"this is Python course",
    img:"../../../../assets/python.png"

  },
  // {
  //   name:"Blockchain",
  //   title:"Blockchain course",
  //   desc:"this is Blockchain course",
  //   img:""

  // },
 
]

  constructor() { }

  ngOnInit() {
  }

}
