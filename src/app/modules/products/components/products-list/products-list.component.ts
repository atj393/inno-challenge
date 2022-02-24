import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { ColumnModel, GridData } from 'src/app/shared/modules/kendo-models';
import { ProductModel, ProductsResponse } from '../../products-models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public view: Observable<GridDataResult> | undefined;

  columns: ColumnModel[] = [
    { field: "product_id", title: "ID", sortable: false, filterable: true },
    { field: "product_title", title: "Product Name", sortable: true, filterable: true },
    // { field: "isBestSeller", title: "Features", sortable: false, filterable: true },
    { field: "evaluate_rate", title: "Rating", sortable: true, filterable: true },
    { field: "app_sale_price", title: "Price", sortable: true, filterable: true },
  ]
  productsList!: ProductsResponse;
  pageNo: number = 0;

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {

    this.productsService.pageNo.subscribe((value: number) => {
      if (value && value != this.pageNo) {
        this.pageNo = value;
        console.log(this.pageNo);
        this.getProductLists(this.pageNo);
      }
    })


  }

  getProductLists(pageNo: number) {
    this.pageNo = pageNo;
    this.productsService.pageNo.next(this.pageNo);
    this.productsService.getProductList(pageNo).subscribe((response: ProductsResponse) => {
      this.productsList = response;
    });
  }

  gotoProductDetails(selectedProduct: ProductModel) {
    this.router.navigate(['/products', selectedProduct.product_id]);
  }

}
