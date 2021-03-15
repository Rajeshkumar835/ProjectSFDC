import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-courses',
  templateUrl: './favourite-courses.component.html',
  styleUrls: ['./favourite-courses.component.scss']
})
export class FavouriteCoursesComponent implements OnInit {

  dummyObjForCourse=[
    {
    name:"Java",
    title:"Java course",
    desc:"this is java course",
    img:"../../../../assets/Java-Logo.png"
  },
  {
    name:"Angular",
    title:"Angular course",
    desc:"this is Angular course",
    img:"../../../../assets/angular.png"

  },
 
]
  constructor() { }

  ngOnInit() {
  }

}
