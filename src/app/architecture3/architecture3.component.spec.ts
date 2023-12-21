import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Architecture3Component } from './architecture3.component';

describe('Architecture3Component', () => {
  let component: Architecture3Component;
  let fixture: ComponentFixture<Architecture3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Architecture3Component]
    });
    fixture = TestBed.createComponent(Architecture3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
