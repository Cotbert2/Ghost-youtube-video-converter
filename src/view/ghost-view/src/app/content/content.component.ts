import { Component } from '@angular/core';
import { UrlDownloaderComponent } from "./url-downloader/url-downloader.component";
import { StepsComponent } from "./steps/steps.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [UrlDownloaderComponent, StepsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
