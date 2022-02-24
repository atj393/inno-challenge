import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/accounts/login.service';
import packageJson from "../../../../../package.json";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(response => {
      if (response) {
        this.version = packageJson.version;
      } else {
        this.version = "";
      }
    })
  }

}
