import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { TopbarAzulComponent } from './components/topbar-azul/topbar-azul.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { BannersPrincipalesComponent } from './components/banners-principales/banners-principales.component';
import { EncimaBannerComponent } from './components/encima-banner/encima-banner.component';
import { CardsComponent } from './components/cards/cards.component';
import { TresCompromisosComponent } from './components/tres-compromisos/tres-compromisos.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { ImagenFullIntermedioComponent } from './components/imagen-full-intermedio/imagen-full-intermedio.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CarouselmarcasComponent } from './components/carouselmarcas/carouselmarcas.component';
import { InfoImagenesSedesComponent } from './components/info-imagenes-sedes/info-imagenes-sedes.component';
import { SedesPaisesComponent } from './components/sedes-paises/sedes-paises.component';
import { SeccionAlcancePaisesComponent } from './components/seccion-alcance-paises/seccion-alcance-paises.component';
import { SeccionNuestrosClientesComponent } from './components/seccion-nuestros-clientes/seccion-nuestros-clientes.component';
import { SeccionDespuesDeNuestrosclientesComponent } from './components/seccion-despues-de-nuestrosclientes/seccion-despues-de-nuestrosclientes.component';
import { SeccionHojadevidaComponent } from './components/seccion-hojadevida/seccion-hojadevida.component';
import { FooterComponent } from './components/footer/footer.component';
import { NeplanComponent } from './components/neplan/neplan.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  
  declarations: [
    AppComponent,
    TopbarAzulComponent,
    MenuPrincipalComponent,
    BannersPrincipalesComponent,
    EncimaBannerComponent,
    CardsComponent,
    TresCompromisosComponent,
    MenuVerticalComponent,
    ImagenFullIntermedioComponent,
    TabsComponent,
    CarouselmarcasComponent,
    InfoImagenesSedesComponent,
    SedesPaisesComponent,
    SeccionAlcancePaisesComponent,
    SeccionNuestrosClientesComponent,
    SeccionDespuesDeNuestrosclientesComponent,
    SeccionHojadevidaComponent,
    FooterComponent,
    NeplanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
