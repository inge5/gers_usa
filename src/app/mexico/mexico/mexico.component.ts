import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
declare function mainFunction();

@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.css']
})
export class MexicoComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.cambiarTitulo('GERS - México');
    mainFunction();
  }

}
