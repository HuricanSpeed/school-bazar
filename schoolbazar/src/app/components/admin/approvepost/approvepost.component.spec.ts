import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovepostComponent } from './approvepost.component';

describe('ApprovepostComponent', () => {
  let component: ApprovepostComponent;
  let fixture: ComponentFixture<ApprovepostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovepostComponent]
    });
    fixture = TestBed.createComponent(ApprovepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
