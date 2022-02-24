import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/accounts/login.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  avatar:string =
    "https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg";

  show: boolean = false;
  anchor!: ElementRef<any>;
  username: string = "";

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(response => {
      if (response) {
        this.username = this.loginService.username;
      } else {
        this.username = "";
      }
    })
  }

  onToggle(): void {
    this.show = !this.show;
  }

  logout(): void {
    this.show = false;
    this.loginService.setUserStatus('');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
