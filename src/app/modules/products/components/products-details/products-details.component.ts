import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductDetails } from '../../products-models';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  productId: string = "";
  productDetails!: ProductDetails;

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) {
    this.activatedRoute.params.subscribe(params => {
      this.productId = params["id"];
      if (params["id"]) {
        this.getProductDetails(this.productId);
      }
    });
  }

  ngOnInit(): void { }

  getProductDetails(id: string) {
    this.productsService.getProductDetails(id).subscribe((response: ProductDetails) => {
      if (response) {
        this.productDetails = response;
      }
    });
  }

}
