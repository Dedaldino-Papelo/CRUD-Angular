import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product/interface/product';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  @Input() title: string = ""
  @Input() txtButton: string = ""
  @Input() ProductToUpdate: Product = {name: '', price: 0}
  
  @Output() createProductEvent = new EventEmitter<any>();
  
  constructor(){}

  ngOnInit(): void {
  }

  createProduct() {
    this.createProductEvent.emit(this.ProductToUpdate)
  }
}
