import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MenusUsaService } from '../../services/menus-usa.service';

@Component({
  selector: 'app-menu-principal-usa',
  templateUrl: './menu-principal-usa.component.html',
  styleUrls: ['./menu-principal-usa.component.css']
})
export class MenuPrincipalUsaComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;

  menuPrincipal_data: any[] = [];

  constructor(private _menusService:MenusUsaService) { }

  ngOnInit(): void {
    this.getMenuPrincipal();
  }

  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition && window.screen.width >= 768) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  getMenuPrincipal(){
    this._menusService.getMenuPrincipal()
    .subscribe((res:any) => {
      this.menuPrincipal_data = res.items;
    });  
  }

}
