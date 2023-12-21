import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStandardUserComponent } from './login-standard-user.component';

describe('LoginStandardUserComponent', () => {
  let component: LoginStandardUserComponent;
  let fixture: ComponentFixture<LoginStandardUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginStandardUserComponent]
    });
    fixture = TestBed.createComponent(LoginStandardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
