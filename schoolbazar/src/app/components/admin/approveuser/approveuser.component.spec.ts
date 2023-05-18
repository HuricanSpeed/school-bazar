import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveuserComponent } from './approveuser.component';

describe('ApproveuserComponent', () => {
  let component: ApproveuserComponent;
  let fixture: ComponentFixture<ApproveuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveuserComponent]
    });
    fixture = TestBed.createComponent(ApproveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
