import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  API_ENDPOINT = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  //service to download a youtube video
  downloadVideo(data: any) : Observable<any> {
    return this.http.post(`${this.API_ENDPOINT}/download`, data);

  }
}
