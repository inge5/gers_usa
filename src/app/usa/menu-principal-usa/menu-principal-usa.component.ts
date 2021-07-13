import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MenusUsaService } from '../../services/menus-usa.service';

@Component({
  selector: 'app-menu-principal-usa',
  templateUrl: './menu-principal-usa.component.html',
  styleUrls: ['./menu-principal-usa.component.css']
})
export class MenuPrincipalUsaComponent implements OnInit {

  menuPrincipal_data: any[] = [];

  constructor(private _menusService:MenusUsaService) { }

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  getMenuPrincipal(){
    this._menusService.getMenuPrincipal()
    .subscribe((res:any) => {
      this.menuPrincipal_data = res.items;
    });  
  }

}
