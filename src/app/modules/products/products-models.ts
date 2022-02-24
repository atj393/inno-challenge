export interface ProductModel {
    app_sale_price: string,
    app_sale_price_currency: string,
    evaluate_rate: string,
    isBestSeller: boolean,
    isPrime: boolean,
    original_price: string,
    product_detail_url: string,
    product_id: string,
    product_main_image_url: string,
    product_title: string
}

export interface ProductDetails {
    modificationDate: string,
    feature_bullets: string[],
    _id: string,
    isPrime: boolean,
    product_id: string,
    product_detail_url: string,
    currency: string,
    product_details: any[],
    available_quantity: number,
    price_information: {
        app_sale_price: number,
        currency: string,
        original_price: number,
        discount: number,
        discount_percentage: number
    },
    product_title: string,
    product_main_image_url: string,
    original_price: number,
    app_sale_price: number,
    discount: number,
    country: string
}

export interface ProductsResponse{
    docs:any[],
    total_record_count: string,
    nexPage: number|null,
    prvPage: number|null,
    hasNextPage: boolean,
    hasPrevPage: boolean,
    page: number,
    totalPages: number,
    noResults: boolean,
}