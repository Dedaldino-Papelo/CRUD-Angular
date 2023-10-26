import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  @Input() title: string = ""
  
  constructor(){}

  ngOnInit(): void {
    
  }
}
