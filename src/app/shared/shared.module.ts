import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KendoModule } from './modules/kendo/kendo.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    AppHeaderComponent,
  ],
  imports: [
    CommonModule,
    KendoModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    AppHeaderComponent,
  ]
})
export class SharedModule { }
