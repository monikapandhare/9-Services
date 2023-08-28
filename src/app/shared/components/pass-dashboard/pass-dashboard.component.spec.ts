import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassDashboardComponent } from './pass-dashboard.component';

describe('PassDashboardComponent', () => {
  let component: PassDashboardComponent;
  let fixture: ComponentFixture<PassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
