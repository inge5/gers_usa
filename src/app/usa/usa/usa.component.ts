import { Component, OnInit } from '@angular/core';
declare function mainFunction();

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    mainFunction();
    if(!localStorage.getItem('carrito')){
      localStorage.setItem('carrito', JSON.stringify([]));
    }
  }

}
