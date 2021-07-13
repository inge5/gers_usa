import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenusMxService } from 'src/app/services/menus-mx.service';
declare var $: any;

@Component({
  selector: 'app-menu-principal-mx',
  templateUrl: './menu-principal-mx.component.html',
  styleUrls: ['./menu-principal-mx.component.css']
})
export class MenuPrincipalMxComponent implements OnInit {
  menuPrincipal_data: any[] = [];

  constructor(private _menusService: MenusMxService) { }

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  getMenuPrincipal() {
    this._menusService.getMenuPrincipal()
      .subscribe((res: any) => {
        this.menuPrincipal_data = res.items;
      });
  }
}
