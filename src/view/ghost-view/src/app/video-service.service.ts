import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor() { }

  //service to download a youtube video
  downloadVideo(url: string) : Observable<any> {
    console.log('Downloading video', url);
  }
}
