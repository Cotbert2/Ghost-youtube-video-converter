import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-pannel',
  templateUrl: './action-pannel.component.html',
  styleUrls: ['./action-pannel.component.css']
})
export class ActionPannelComponent  implements OnInit{
  
  portFormatOptions : string[] = ['Video', 'Audio' ];
  AudioformatOptions : string[] = [
    'mp3', 'aac', 'wav', 'ma4'
  ];

  VideoformatOptions : string[] = [
    'mp4', 'mkv', 'webm', 'flv', 'avi'
  ];

  ngOnInit(): void {
    console.log('on init');
  }

  constructor() { }
}
