import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './modules/accounts/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inno-challenge';

  constructor(private loginService: LoginService, private router: Router) {
    if (!!localStorage.getItem('username')) {
      if (!this.loginService.username) {
        this.loginService.setUserStatus(localStorage.getItem('username') || '');
      }
    }

    this.loginService.loggedIn.subscribe(value => {
      if (value) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/login']);
      }
    })
  }
}
