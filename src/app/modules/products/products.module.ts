import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { KendoModule } from 'src/app/shared/modules/kendo/kendo.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { RequestHeaderInterceptor } from './../../shared/interceptor/request-header.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    KendoModule,
    SharedModule,
    QRCodeModule
  ],
  providers: [
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHeaderInterceptor,
      multi: true,
    },
  ]
})
export class ProductsModule { }
