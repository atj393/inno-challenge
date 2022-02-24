import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppHeaderComponent } from './app-header.component';

fdescribe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppHeaderComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be displayed if user not logged in', () => {
    component.username = '';
    const { debugElement } = fixture;
    const kendoAppbar = debugElement.query(By.css('.kendo-appbar'));
    expect(kendoAppbar).toBeNull();
  });

  it('should be displayed if user logged in', () => {
    component.username = 'test user';
    const { debugElement } = fixture;
    const kendoAppbar = debugElement.query(By.css('.kendo-appbar'));
    expect(kendoAppbar).toBeNull();
  });


  it('should be logged out when click on the Logout button', () => {
    component.logout();
    fixture.detectChanges();
    /* const link = fixture.debugElement.query(
      By.css('#nav-product'));
      link.triggerEventHandler('click', null);
    console.log('===================>', button);
    fixture.detectChanges(); */
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

});
