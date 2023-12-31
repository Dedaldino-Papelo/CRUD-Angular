import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
    ){}

  ngOnInit(): void {}

  headerTitle: string = "new product"
  buttonTxt: string = "save"
  
  product: Product = {
    name: '',
    price: 0
  }

  createProduct(items: any): void {
    const { name, price } = items
    this.product.name = name
    this.product.price = price

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Successfully created')
      this.router.navigate(['/products'])

    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
