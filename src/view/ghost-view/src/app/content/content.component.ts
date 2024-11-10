import { Component } from '@angular/core';
import { UrlDownloaderComponent } from "./url-downloader/url-downloader.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [UrlDownloaderComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
