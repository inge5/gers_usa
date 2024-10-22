import { Component, OnInit } from '@angular/core';
import { MenusUsaService } from '../../services/menus-usa.service';

@Component({
  selector: 'app-footer-usa',
  templateUrl: './footer-usa.component.html',
  styleUrls: ['./footer-usa.component.css'],
})
export class FooterUsaComponent implements OnInit {
  aboutUs: any;
  contacto: any;
  redesSociales: any;
  constructor(private menusUsaService: MenusUsaService) {}

  ngOnInit(): void {
    this.menuFooterAbout();
    this.menuFooterContact();
    this.menuFooterSocial();
  }
  menuFooterAbout() {
    this.menusUsaService.getFooterAbout().subscribe((resp) => {
      this.aboutUs = resp.items;
    });
  }
  menuFooterContact() {
    this.menusUsaService.getFooterContact().subscribe((resp) => {
      this.contacto = resp.items;
    });
  }
  menuFooterSocial() {
    this.menusUsaService.getFooterSocial().subscribe((resp) => {
      this.redesSociales = resp.items;
    });
  }
}
