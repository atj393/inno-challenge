import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Align } from '@progress/kendo-angular-popup';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  popupAlign: Align = { horizontal: "right", vertical: "top" };
  username: string = '';

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username.length) {
      this.loginService.setUserStatus(this.username);
      this.router.navigate(['/']);
    }
  }

}
