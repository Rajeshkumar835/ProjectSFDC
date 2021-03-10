import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lms-landing-screen',
  templateUrl: './lms-landing-screen.component.html',
  styleUrls: ['./lms-landing-screen.component.scss']
})
export class LmsLandingScreenComponent implements OnInit {


  dummyObjForCourse=[
    {
    name:"Java",
    title:"Java course",
    desc:"this is java course",
    img:""
  },
  {
    name:"Angular",
    title:"Angular course",
    desc:"this is Angular course",
    img:""

  },
  {
    name:"React",
    title:"React course",
    desc:"this is React course",
    img:""

  },
  
  {
    name:"Node.js",
    title:"Node.js course",
    desc:"this is Node.js course",
    img:""

  },
  {
    name:"Spring",
    title:"Spring course",
    desc:"this is Spring course",
    img:""

  },
  {
    name:"React Native",
    title:"React Native course",
    desc:"this is React Native course",
    img:""

  },
  {
    name:"Hadoop",
    title:"Hadoop course",
    desc:"this is Hadoop course",
    img:""

  },
  {
    name:"Python",
    title:"Python course",
    desc:"this is Python course",
    img:""

  },
  {
    name:"Blockchain",
    title:"Blockchain course",
    desc:"this is Blockchain course",
    img:""

  },
  {
    name:"Data Science",
    title:"Data Science course",
    desc:"this is Data Science course",
    img:""

  },
]
  constructor() { }

  ngOnInit() {
  }

}
