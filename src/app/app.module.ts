import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {RouterModule} from '@angular/router';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { APP_ROUTING } from './app.routing';

// Services Colombia
import { HomeService } from './services/home.service';
import { MenusService } from './services/menus.service';
import { PagesService } from './services/pages.service';
import { VacantesService } from './services/vacantes.service';
import { PublicacionesService } from './services/publicaciones.service';

//Services Estados Unidos
import { HomeUsaService } from './services/home-usa.service';
import { PagesUsaService } from './services/pages-usa.service';
import { VacantesUsaService } from './services/vacantes-usa.service';
import { PublicacionesUsaService } from './services/publicaciones-usa.service';

//Services Chile
import { HomeClService } from './services/home-cl.service';
import { PagesClService } from './services/pages-cl.service';


import { AppComponent } from './app.component';
import { TopbarAzulComponent } from './colombia/topbar-azul/topbar-azul.component';
import { MenuPrincipalComponent } from './colombia/menu-principal/menu-principal.component';
import { MenuVerticalComponent } from './colombia/menu-vertical/menu-vertical.component';
import { FooterComponent } from './colombia/footer/footer.component';

import { HomeComponent, SafeHtmlPipe } from './colombia/home/home.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { NeplanComponent } from './colombia/representaciones/neplan/neplan.component';
import { BeckwithElectronicComponent } from './colombia/representaciones/beckwith-electronic/beckwith-electronic.component';
import { XgslabComponent } from './colombia/representaciones/xgslab/xgslab.component';
import { DranetzComponent } from './colombia/representaciones/dranetz/dranetz.component';
import { NdbComponent } from './colombia/representaciones/ndb/ndb.component';
import { ProyectosComponent } from './colombia/proyectos/proyectos.component';
import { PruebasAutomatizacionControlComponent } from './colombia/servicios/pruebas-automatizacion-control/pruebas-automatizacion-control.component';
import { DetalleProductoComponent } from './colombia/productos/detalle-producto/detalle-producto.component';
import { ProductoComponent } from './colombia/productos/producto/producto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CarritoComponent } from './colombia/carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderDetalleComponent } from './colombia/slider-detalle/slider-detalle.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { DisenoIngenieriaComponent } from './colombia/servicios/diseno-ingenieria/diseno-ingenieria.component';
import { SmartGridsComponent } from './colombia/servicios/smart-grids/smart-grids.component';
import { EstudiosSistemasComponent } from './colombia/servicios/estudios-sistemas/estudios-sistemas.component';
import { ServiciosEnergeticosComponent } from './colombia/servicios/servicios-energeticos/servicios-energeticos.component';
import { InterventoriasAsesoriasComponent } from './colombia/servicios/interventorias-asesorias/interventorias-asesorias.component';
import { PlaneacionProyectosComponent } from './colombia/servicios/planeacion-proyectos/planeacion-proyectos.component';
import { ContactenosComponent } from './colombia/contactenos/contactenos.component';
import { PensamientoCorporativoComponent } from './colombia/nosotros/pensamiento-corporativo/pensamiento-corporativo.component';
import { PoliticaGestionIntegralComponent } from './colombia/nosotros/politica-gestion-integral/politica-gestion-integral.component';
import { AcuerdosInternacionalesComponent } from './colombia/acuerdos-internacionales/acuerdos-internacionales.component';
import { TrabajeConNosotrosComponent } from './colombia/trabaje-con-nosotros/trabaje-con-nosotros.component';
import { EnviarCurriculumComponent } from './colombia/enviar-curriculum/enviar-curriculum.component';
import { VacanteInternaComponent } from './colombia/vacante-interna/vacante-interna.component';
import { PublicacionesComponent } from './colombia/publicaciones/publicaciones.component';
import { PublicacionInternaComponent } from './colombia/publicaciones/publicacion-interna/publicacion-interna.component';


import { OwlModule } from 'ngx-owl-carousel';
import {NgxPaginationModule} from 'ngx-pagination';

//USA COMPONENTS
import { UsaComponent } from './usa/usa/usa.component';
import { MenuPrincipalUsaComponent } from './usa/menu-principal-usa/menu-principal-usa.component';
import { TopbarComponent } from './usa/topbar/topbar.component';
import { HomeUsaComponent } from './usa/home-usa/home-usa.component';
import { CorporateThinkingComponent } from './usa/corporate-thinking/corporate-thinking.component';
import { FooterUsaComponent } from './usa/footer-usa/footer-usa.component';
import { ContactComponent } from './usa/contact/contact.component';
import { IntegralManagementPoliciesComponent } from './usa/integral-management-policies/integral-management-policies.component';
import { NeplanUsaComponent } from './usa/representaciones/neplan-usa/neplan-usa.component';
import { PowerSystemStudiesComponent } from './usa/servicios/power-system-studies/power-system-studies.component';
import { SmartGridsUsaComponent } from './usa/servicios/smart-grids-usa/smart-grids-usa.component';
import { ProtectionAndControlComponent } from './usa/servicios/protection-and-control/protection-and-control.component';
import { FieldServicesComponent } from './usa/servicios/field-services/field-services.component';
import { ProyectsComponent } from './usa/proyects/proyects.component';
import { WorkWithUsComponent } from './usa/work-with-us/work-with-us.component';
import { InternalVacancyComponent } from './usa/internal-vacancy/internal-vacancy.component';
import { InsightsComponent } from './usa/insights/insights.component';
import { InsightsInsideComponent } from './usa/insights/insights-inside/insights-inside.component';
import { MenuVerticalUsaComponent } from './usa/menu-vertical-usa/menu-vertical-usa.component';
import { CapacitacionComponent } from './colombia/capacitacion/capacitacion.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';// a plugin!
import listPlugin from '@fullcalendar/list';
import { CharPipe } from './pipes/char.pipe';
import { InternaCapacitacionComponent } from './colombia/interna-capacitacion/interna-capacitacion.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);

// Componentes Chile

import { ChileComponent } from './chile/chile/chile.component';
import { MenuPrincipalChileComponent } from './chile/menu-principal-chile/menu-principal-chile.component';
import { NeplanClComponent } from './chile/representaciones/neplan-cl/neplan-cl.component';
import { HomeClComponent } from './chile/home-cl/home-cl.component';
import { FooterChileComponent } from './chile/footer-chile/footer-chile.component';
import { TopbarChileComponent } from './chile/topbar-chile/topbar-chile.component';
import { PensamientoCorporativoClComponent } from './chile/nosotros/pensamiento-corporativo-cl/pensamiento-corporativo-cl.component';
import { TrainingsComponent } from './usa/trainings/trainings.component';
import { InternalTrainingsComponent } from './usa/internal-trainings/internal-trainings.component';

@NgModule({
  declarations: [
    CapacitacionComponent,
    InternaCapacitacionComponent,
    AppComponent,
    SafeHtmlPipe,
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
    PruebasAutomatizacionControlComponent,
    DetalleProductoComponent,
    ProductoComponent,
    CarritoComponent,
    SliderDetalleComponent,
    DisenoIngenieriaComponent,
    SmartGridsComponent,
    EstudiosSistemasComponent,
    ServiciosEnergeticosComponent,
    InterventoriasAsesoriasComponent,
    PlaneacionProyectosComponent,
    ContactenosComponent,
    PensamientoCorporativoComponent,
    PoliticaGestionIntegralComponent,
    AcuerdosInternacionalesComponent,
    TrabajeConNosotrosComponent,
    EnviarCurriculumComponent,
    VacanteInternaComponent,
    PublicacionesComponent,
    PublicacionInternaComponent,
    ChileComponent,
    MenuPrincipalChileComponent,
    NeplanClComponent,
    UsaComponent,
    MenuPrincipalUsaComponent,
    TopbarComponent,
    HomeUsaComponent,
    CorporateThinkingComponent,
    FooterUsaComponent,
    ContactComponent,
    IntegralManagementPoliciesComponent,
    NeplanUsaComponent,
    PowerSystemStudiesComponent,
    SmartGridsUsaComponent,
    ProtectionAndControlComponent,
    FieldServicesComponent,
    ProyectsComponent,
    WorkWithUsComponent,
    InternalVacancyComponent,
    InsightsComponent,
    InsightsInsideComponent,
    MenuVerticalUsaComponent,
    HomeClComponent,
    FooterChileComponent,
    TopbarChileComponent,
    PensamientoCorporativoClComponent,
    CharPipe,
    TrainingsComponent,
    InternalTrainingsComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularPaginatorModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot(),
    APP_ROUTING,
    OwlModule,
    NgxPaginationModule,
    FullCalendarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    //COLOMBIA
    HomeService,
    MenusService,
    PagesService,
    VacantesService,
    PublicacionesService,

    //ESTADOS UNIDOS
    HomeUsaService,
    PagesUsaService,
    VacantesUsaService,
    PublicacionesUsaService,

    //CHILE
    HomeClService,
    PagesClService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
