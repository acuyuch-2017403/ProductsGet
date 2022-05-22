import { Component, OnInit } from '@angular/core';
import { ProductRestService } from 'src/app/services/productRest/product-rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;

  constructor(
    private productRest: ProductRestService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productRest.getProducts().subscribe({
      next: (res:any)=> this.products = res.products,
      error: (err)=>alert(err.error.message)
    })
  }
}
