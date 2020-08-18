import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCountdownComponent } from './login-countdown.component';

describe('LoginCountdownComponent', () => {
  let component: LoginCountdownComponent;
  let fixture: ComponentFixture<LoginCountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
