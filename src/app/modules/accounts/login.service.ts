import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  username: string = '';

  constructor(private router: Router) { }

  setUserStatus(value: string) {
    this.username = value;
    localStorage.setItem('username', this.username);
    this.loggedIn.next(!!value);
    if (!!value) {
      this.router.navigate(['/login']);
    }
  }
}
