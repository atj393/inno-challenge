
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { ProductDetails, ProductsResponse } from '../products-models';

fdescribe('ProductsService', () => {
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // service = TestBed.inject(ProductsService);

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getProductList() return expected data', (done) => {
    const expectedData: ProductsResponse =
    {
      docs: [],
      total_record_count: '100',
      nexPage: 1,
      prvPage: null,
      hasNextPage: true,
      hasPrevPage: false,
      page: 1,
      totalPages: 5,
      noResults: false
    };

    service.getProductList(1).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('/api/product?page=1&country=DE&keyword=iphone&categoryID=aps');

    testRequest.flush(expectedData);
  });

  it('should getProductDetails() return expected data', (done) => {
    const expectedData: ProductDetails =
    {
      modificationDate: "2022-02-19T05:52:36.751Z",
      feature_bullets: [],
      _id: "9",
      isPrime: false,
      product_id: "B08L5TDJX6",
      product_detail_url: "",
      currency: "$",
      product_details: [],
      available_quantity: 4,
      price_information: {
        app_sale_price: 619.99,
        currency: "$",
        original_price: 679,
        discount: 59.01,
        discount_percentage: 8.69
      },
      product_title: "Apple iPhone 12 Mini (64 GB) - Schwarz",
      product_main_image_url: "https://m.media-amazon.com/images/I/710LmPSDpbL._AC_SL1500_.jpg",
      original_price: 679,
      app_sale_price: 619.99,
      discount: 59.01,
      country: "DE"
    };

    service.getProductDetails("B08L5TDJX6").subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('/api/product/B08L5TDJX6?country=DE');

    testRequest.flush(expectedData);
  });
});
