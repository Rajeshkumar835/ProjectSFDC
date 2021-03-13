import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  profileImage="../../assets/profileimage1.png"

  constructor() { }

  ngOnInit() {
  }
  // D:\anagha project\angular\intranet\client\src\assets\profileimage.webp
}
