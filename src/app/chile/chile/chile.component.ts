import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
declare function mainFunction();


@Component({
  selector: 'app-chile',
  templateUrl: './chile.component.html',
  styleUrls: ['./chile.component.css']
})
export class ChileComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.cambiarTitulo('GERS - Chile');
    mainFunction();
  }

}
