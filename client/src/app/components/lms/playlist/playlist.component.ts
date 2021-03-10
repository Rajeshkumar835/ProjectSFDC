import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  @Input() videos: Array<{}>;
      @Output() videoClicked = new EventEmitter<Object>();
      currentVideo = {};
    
      onVideoClick(video) {
        this.videoClicked.emit(video);
        this.currentVideo = video;
      }
    
      ngOnInit() {
        this.currentVideo = this.videos[0];
      }

}
