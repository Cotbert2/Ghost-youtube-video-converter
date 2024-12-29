import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VideoServiceService } from '../../video-service.service';

@Component({
  selector: 'app-url-downloader',
  standalone: true,
  imports: [FormsModule],

  templateUrl: './url-downloader.component.html',
  styleUrl: './url-downloader.component.scss'
})



export class UrlDownloaderComponent implements OnInit{

  constructor(
    private videoService: VideoServiceService
  ) { }


  ngOnInit(): void {
      
  }

  youtubeUrl : string = '';




  downloadVideo() : void {
    console.log('Downloading video', this.youtubeUrl);
    this.videoService.downloadVideo({
      downloadPath: './audio',
      url: this.youtubeUrl,
      format: 'mp3'
    }).subscribe((data : any) => {
      console.log('Downloaded video', data);
      if(data.fileName && data.videoTitle) alert(`Downloaded ${data.videoTitle} as ${data.fileName}`);
      else alert('Something went wrong');
    },(error : any) => {
      console.log('Error downloading video', error);
    });
  }




}
