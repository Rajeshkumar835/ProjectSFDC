import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lms-landing-screen',
  templateUrl: './lms-landing-screen.component.html',
  styleUrls: ['./lms-landing-screen.component.scss']
})
export class LmsLandingScreenComponent implements OnInit {
showCourseOnUi;
searchText;
allCourses=[
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
{
  name:"React",
  title:"React course",
  desc:"this is React course",
  img:"../../../../assets/React.png"

},

{
  name:"Node.js",
  title:"Node.js course",
  desc:"this is Node.js course",
  img:"../../../../assets/node.jpg"

},
{
  name:"Spring",
  title:"Spring course",
  desc:"this is Spring course",
  img:"../../../../assets/spring.png"
},
{
  name:"React Native",
  title:"React Native course",
  desc:"this is React Native course",
  img:"../../../../assets/react_native.png"

},
{
  name:"Hadoop",
  title:"Hadoop course",
  desc:"this is Hadoop course",
  img:"../../../../assets/hadoop.jpg"

},
{
  name:"Python",
  title:"Python course",
  desc:"this is Python course",
  img:"../../../../assets/python.png"

},
{
  name:"Blockchain",
  title:"Blockchain course",
  desc:"this is Blockchain course",
  img:"../../../../assets/blockchain.png"

},
{
  name:"Data Science",
  title:"Data Science course",
  desc:"this is Data Science course",
  img:"../../../../assets/data-science.png"

},
];
  constructor(private router:Router) { }

  ngOnInit() {
    this.showCourseOnUi=this.allCourses;
  }
  onClickOfCourse(){
    this.router.navigate(["/course-content"]);
  }
  filterData(event){
    this.showCourseOnUi=this.allCourses;
    console.log("value of course", event.target.value)
    this.showCourseOnUi = this.showCourseOnUi.filter((value)=>(value.name == event.target.value));
  }
}
