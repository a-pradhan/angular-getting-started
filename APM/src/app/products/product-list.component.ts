import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List'
    imageWidth: number = 2
    imageMargin: number = 2
    showImage: boolean = false;
    _listFilter: string;
    
    // long syntax

    //private _productService;
    // constructor(productService: ProductService) {
    //     this.filteredProducts = this.products;
    //     this.listFilter = 'cart';
    //     this._productService = productService
    // }

    //shorthand syntax
    constructor(private _productService: ProductService) {

    }
    
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[]
    products: IProduct[] = []

    onRatingClicked(message: string): void {
        this.pageTitle='Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase()
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts()
        this.filteredProducts = this.products;
    }
}