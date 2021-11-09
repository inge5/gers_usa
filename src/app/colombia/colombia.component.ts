import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
declare var mainFunction: any;

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.component.html',
  styleUrls: ['./colombia.component.css']
})
export class ColombiaComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.cambiarTitulo('GERS - Colombia');
    mainFunction();
    if(!localStorage.getItem('carrito')){
      localStorage.setItem('carrito', JSON.stringify([]));
    }
  }

}
