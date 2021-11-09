import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
declare function mainFunction();

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.cambiarTitulo('GERS - USA');
    mainFunction();
    if(!localStorage.getItem('carrito')){
      localStorage.setItem('carrito', JSON.stringify([]));
    }
  }

}
