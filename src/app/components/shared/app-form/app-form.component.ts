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
  @Input() ProductToUpdate!: Product
  
  @Output() createProductEvent = new EventEmitter<any>();
  
  constructor(){}

  ngOnInit(): void {
  }

  createProduct(name: string, price: string) {
    const items = { name, price }
    this.createProductEvent.emit(items)
  }
}
