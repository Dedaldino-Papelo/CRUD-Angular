import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  headerTitle: string = "edit product"
  product!: Product
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ){}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.productService.readById(id)
      .subscribe((product) => {
        this.product = product
   })
  }

  updateProduct(): void {
    this.productService.update(this.product)
      .subscribe(()=> {
        this.productService.showMessage('Product Successfully updated')
        this.router.navigate(['/products'])
      })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
