import { Component, OnInit } from '@angular/core';
declare function mainFunction()

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.component.html',
  styleUrls: ['./colombia.component.css']
})
export class ColombiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    mainFunction();
    if(!localStorage.getItem('carrito')){
      localStorage.setItem('carrito', JSON.stringify([]));
    }
  }

}
