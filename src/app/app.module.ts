import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { TopbarAzulComponent } from './topbar-azul/topbar-azul.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './colombia/home/home.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { NeplanComponent } from './colombia/representaciones/neplan/neplan.component';
import { BeckwithElectronicComponent } from './colombia/representaciones/beckwith-electronic/beckwith-electronic.component';
import { XgslabComponent } from './colombia/representaciones/xgslab/xgslab.component';
import { DranetzComponent } from './colombia/representaciones/dranetz/dranetz.component';
import { NdbComponent } from './colombia/representaciones/ndb/ndb.component';
import { ProyectosComponent } from './colombia/proyectos/proyectos.component';
import { PruebasAutomatizacionControlComponent } from './colombia/servicios/pruebas-automatizacion-control/pruebas-automatizacion-control.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarAzulComponent,
    MenuPrincipalComponent,
    MenuVerticalComponent,
    FooterComponent,
    NeplanComponent,
    HomeComponent,
    ColombiaComponent,
    BeckwithElectronicComponent,
    XgslabComponent,
    DranetzComponent,
    NdbComponent,
    ProyectosComponent,
    PruebasAutomatizacionControlComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
