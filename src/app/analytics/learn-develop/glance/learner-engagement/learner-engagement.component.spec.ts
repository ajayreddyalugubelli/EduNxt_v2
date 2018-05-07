import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerEngagementComponent } from './learner-engagement.component';

describe('LearnerEngagementComponent', () => {
  let component: LearnerEngagementComponent;
  let fixture: ComponentFixture<LearnerEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
