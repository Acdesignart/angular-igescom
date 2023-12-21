import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeasyDashboardComponent } from './beasy-dashboard.component';

describe('BeasyDashboardComponent', () => {
  let component: BeasyDashboardComponent;
  let fixture: ComponentFixture<BeasyDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BeasyDashboardComponent]
    });
    fixture = TestBed.createComponent(BeasyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
