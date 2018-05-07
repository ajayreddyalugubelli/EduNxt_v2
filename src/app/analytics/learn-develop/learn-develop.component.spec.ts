import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDevelopComponent } from './learn-develop.component';

describe('LearnDevelopComponent', () => {
  let component: LearnDevelopComponent;
  let fixture: ComponentFixture<LearnDevelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnDevelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
