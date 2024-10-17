import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPannelComponent } from './action-pannel.component';

describe('ActionPannelComponent', () => {
  let component: ActionPannelComponent;
  let fixture: ComponentFixture<ActionPannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionPannelComponent]
    });
    fixture = TestBed.createComponent(ActionPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
