import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginComponent],
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be triggered the Login button if username is not entered', () => {

    component.username = '';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeTruthy();

  });


  it('should be triggered the Login button if username is entered', () => {
    component.username = 'test user';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('button').disabled).toBeFalsy();
  });

});
