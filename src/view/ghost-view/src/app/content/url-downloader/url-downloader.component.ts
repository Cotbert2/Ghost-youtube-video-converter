import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';







@Component({
  selector: 'app-url-downloader',
  standalone: true,
  imports: [FormsModule],

  templateUrl: './url-downloader.component.html',
  styleUrl: './url-downloader.component.scss'
})



export class UrlDownloaderComponent implements OnInit{

  constructor() { }


  ngOnInit(): void {
      
  }

  youtubeUrl : string = '';




  downloadVideo() : void {
    console.log('Downloading video', this.youtubeUrl);
  }




}
