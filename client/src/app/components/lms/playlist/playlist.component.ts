import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  @Input() videos: any;
      @Output() videoClicked = new EventEmitter<Object>();
      currentVideo:any;
    
      onVideoClick(video) {
        this.videoClicked.emit(video);
        this.currentVideo = video;
      }
    
      ngOnInit() {
        this.currentVideo = this.videos[0];
        console.log("current video", this.currentVideo, typeof(this.currentVideo), this.currentVideo.name)
      }

}
