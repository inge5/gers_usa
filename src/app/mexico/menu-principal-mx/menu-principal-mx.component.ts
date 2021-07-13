import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenusMxService } from 'src/app/services/menus-mx.service';
declare var $: any;

@Component({
  selector: 'app-menu-principal-mx',
  templateUrl: './menu-principal-mx.component.html',
  styleUrls: ['./menu-principal-mx.component.css']
})
export class MenuPrincipalMxComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;
  menuPrincipal_data: any[] = [];

  constructor(private _menusService: MenusMxService) { }

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

  getMenuPrincipal() {
    this._menusService.getMenuPrincipal()
      .subscribe((res: any) => {
        this.menuPrincipal_data = res.items;
      });
  }
}
