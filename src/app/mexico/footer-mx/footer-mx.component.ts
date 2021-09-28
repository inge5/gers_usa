import { Component, OnInit } from '@angular/core';
import { MenusMxService } from '../../services/menus-mx.service';

@Component({
  selector: 'app-footer-mx',
  templateUrl: './footer-mx.component.html',
  styleUrls: ['./footer-mx.component.css']
})
export class FooterMxComponent implements OnInit {

  datos: any;
  datos2: any;
  menuContactenos: any;
  constructor(private menuMxService: MenusMxService) { }

  ngOnInit(): void {
    this.menuFooter();
    this.menuFooter2();
    this.menuFooterContactenos();
  }

  menuFooter(){
    this.menuMxService.getMenuFooter().subscribe(resp => {
      this.datos = resp.items;
    })
  }
  menuFooter2(){
    this.menuMxService.getMenuFooter2().subscribe(resp => {
      this.datos2 = resp.items;
    })
  }
  menuFooterContactenos(){
    this.menuMxService.getMenuFooterContactenos().subscribe(resp => {
      this.menuContactenos = resp.items;
    })
  }

}
