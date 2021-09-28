import { Component, OnInit } from '@angular/core';
import { MenusClService } from '../../services/menus-cl.service';

@Component({
  selector: 'app-footer-chile',
  templateUrl: './footer-chile.component.html',
  styleUrls: ['./footer-chile.component.css']
})
export class FooterChileComponent implements OnInit {

  datos: any;
  contactos: any;
  certificados: any;
  constructor(private menusClService: MenusClService) { }

  ngOnInit(): void {
    this.menuFooter();
    this.menuFooterContacto();
    this.menuFooterCertificado();
  }

  menuFooter(){
    this.menusClService.getFooter().subscribe(resp => {
      this.datos = resp.items;
    })
  }
  menuFooterContacto(){
    this.menusClService.getFooterContacto().subscribe(resp => {
      this.contactos = resp.items;
    })
  }

  menuFooterCertificado(){
    this.menusClService.getFooterCertificados().subscribe(resp => {
      this.certificados = resp.items;
    })
  }

}
