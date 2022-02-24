import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent } from './components/login/login.component';
import { KendoModule } from 'src/app/shared/modules/kendo/kendo.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    KendoModule,
    FormsModule
  ]
})
export class AccountsModule { }
