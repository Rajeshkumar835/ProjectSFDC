import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.scss']
})
export class MediaplayerComponent implements OnInit {

  constructor() {}
      @ViewChild('videoplayer') videoElement;
      @Input() currentVideo;
      
      video: HTMLVideoElement; 
      progressBarStyle = {
        flexBasis: '0%',
      };
      iconClass = 'k-i-play';
      mouseDown = false;
      
      togglePlay() {
        const method = this.video.paused ? 'play' : 'pause';
        this.video[method]();
        setTimeout(() => this.updateButton(), 10);
      }
    
      updateButton() {
        const icon = this.video.paused ? 'k-i-play' : 'k-i-pause';
        this.iconClass = icon;
      }
    
      handleVolumeChange(e) {
        const { target } = e;
        const { value } = target;
        this.video.volume = value;
      }
    
      handleProgress() {
        const percent = (this.video.currentTime / this.video.duration) * 100;
        this.progressBarStyle.flexBasis = `${percent}%`;
      }
    
      seek(e: MouseEvent) {
        const { srcElement: progress, offsetX } = e;
        // const { offsetWidth } = progress;
        // const seekTime = (offsetX / offsetWidth) * this.video.duration;
        // this.video.currentTime = seekTime;
      }
    
      ngOnInit() {
        const { nativeElement } = this.videoElement;
        this.video = nativeElement;
      }
    
      ngOnChanges(changes) {
        if (this.video) {
          this.progressBarStyle.flexBasis = '0%';
          this.togglePlay();
        }
      }
}
