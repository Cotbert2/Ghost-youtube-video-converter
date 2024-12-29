import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDownloaderComponent } from './url-downloader.component';

describe('UrlDownloaderComponent', () => {
  let component: UrlDownloaderComponent;
  let fixture: ComponentFixture<UrlDownloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlDownloaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrlDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
