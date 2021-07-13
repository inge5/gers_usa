import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';

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
import { CapacitacionChileComponent } from './chile/capacitacion-chile/capacitacion-chile.component';
import { InternaCapacitacionChileComponent } from './chile/interna-capacitacion-chile/interna-capacitacion-chile.component';
import { CapacitacionMexicoComponent } from './mexico/capacitacion-mexico/capacitacion-mexico.component';
import { InternaCapacitacionMexicoComponent } from './mexico/interna-capacitacion-mexico/interna-capacitacion-mexico.component';
import { MexicoComponent } from './mexico/mexico/mexico.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ContactenosMxComponent } from './mexico/contactenos-mx/contactenos-mx.component';
import { PensamientoCorporativoMxComponent } from './mexico/nosotros/pensamiento-corporativo-mx/pensamiento-corporativo-mx.component';
import { TopbarMxComponent } from './mexico/topbar-mx/topbar-mx.component';
import { MenuPrincipalMxComponent } from './mexico/menu-principal-mx/menu-principal-mx.component';
import { PoliticaGestionIntegralMxComponent } from './mexico/nosotros/politica-gestion-integral-mx/politica-gestion-integral-mx.component';
import { PruebasAutomatizacionControlMxComponent } from './mexico/servicios/pruebas-automatizacion-control-mx/pruebas-automatizacion-control-mx.component';
import { SmartGridsMxComponent } from './mexico/servicios/smart-grids-mx/smart-grids-mx.component';
import { AnalisisCalidadEnergiaMxComponent } from './mexico/servicios/analisis-calidad-energia-mx/analisis-calidad-energia-mx.component';
import { PlaneacionProyectosMxComponent } from './mexico/servicios/planeacion-proyectos-mx/planeacion-proyectos-mx.component';
import { EstudiosSistemasMxComponent } from './mexico/servicios/estudios-sistemas-mx/estudios-sistemas-mx.component';
import { HomeMxComponent } from './mexico/home-mx/home-mx.component';
import { FooterMxComponent } from './mexico/footer-mx/footer-mx.component';
import { DisenoIngenieriaMxComponent } from './mexico/servicios/diseno-ingenieria-mx/diseno-ingenieria-mx.component';
import { TerceriasAsesoriasMxComponent } from './mexico/servicios/tercerias-asesorias-mx/tercerias-asesorias-mx.component';
import { NeplanMxComponent } from './mexico/representaciones/neplan-mx/neplan-mx.component';
import { BeckwithElectronicMxComponent } from './mexico/representaciones/beckwith-electronic-mx/beckwith-electronic-mx.component';
import { XgslabMxComponent } from './mexico/representaciones/xgslab-mx/xgslab-mx.component';
import { ProyectosMxComponent } from './mexico/proyectos-mx/proyectos-mx.component';
import { PublicacionesMxComponent } from './mexico/publicaciones-mx/publicaciones-mx.component';
import { PoliticaGestionIntegralClComponent } from './chile/nosotros/politica-gestion-integral-cl/politica-gestion-integral-cl.component';
import { EstudiosSistemasElectricosClComponent } from './chile/servicios/estudios-sistemas-electricos-cl/estudios-sistemas-electricos-cl.component';
import { DisenoEIngenieriaClComponent } from './chile/servicios/diseno-e-ingenieria-cl/diseno-e-ingenieria-cl.component';
import { PruebasAutomatizacionControlClComponent } from './chile/servicios/pruebas-automatizacion-control-cl/pruebas-automatizacion-control-cl.component';
import { ContactenosClComponent } from './chile/contactenos-cl/contactenos-cl.component';
import { ProyectosClComponent } from './chile/proyectos-cl/proyectos-cl.component';
import { PublicacionesClComponent } from './chile/publicaciones-cl/publicaciones-cl.component';
import { PublicacionInternaClComponent } from './chile/publicaciones-cl/publicacion-interna-cl/publicacion-interna-cl.component';
import { XgslabClComponent } from './chile/representaciones/xgslab-cl/xgslab-cl.component';
import { TrabajeConNosotrosClComponent } from './chile/trabaje-con-nosotros-cl/trabaje-con-nosotros-cl.component';
import { VacanteInternaClComponent } from './chile/trabaje-con-nosotros-cl/vacante-interna-cl/vacante-interna-cl.component';
import { MenuVerticalClComponent } from './chile/menu-vertical-cl/menu-vertical-cl.component';
import { MenuVerticalMxComponent } from './mexico/menu-vertical-mx/menu-vertical-mx.component';
import { TrabajeConNosotrosMxComponent } from './mexico/trabaje-con-nosotros-mx/trabaje-con-nosotros-mx.component';
import { VacanteInternaMxComponent } from './mexico/trabaje-con-nosotros-mx/vacante-interna-mx/vacante-interna-mx.component';

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
    CapacitacionComponent,
    CharPipe,
    InternaCapacitacionComponent,
    HomeClComponent,
    FooterChileComponent,
    TopbarChileComponent,
    PensamientoCorporativoClComponent,
    CharPipe,
    TrainingsComponent,
    InternalTrainingsComponent,
    CapacitacionChileComponent,
    InternaCapacitacionChileComponent,
    CapacitacionMexicoComponent,
    InternaCapacitacionMexicoComponent,
    MexicoComponent,
    ContactenosMxComponent,
    PensamientoCorporativoMxComponent,
    TopbarMxComponent,
    MenuPrincipalMxComponent,
    PoliticaGestionIntegralMxComponent,
    PruebasAutomatizacionControlMxComponent,
    SmartGridsMxComponent,
    AnalisisCalidadEnergiaMxComponent,
    PlaneacionProyectosMxComponent,
    EstudiosSistemasMxComponent,
    HomeMxComponent,
    FooterMxComponent,
    DisenoIngenieriaMxComponent,
    TerceriasAsesoriasMxComponent,
    NeplanMxComponent,
    BeckwithElectronicMxComponent,
    XgslabMxComponent,
    ProyectosMxComponent,
    PublicacionesMxComponent,
    PoliticaGestionIntegralClComponent,
    EstudiosSistemasElectricosClComponent,
    DisenoEIngenieriaClComponent,
    PruebasAutomatizacionControlClComponent,
    ContactenosClComponent,
    ProyectosClComponent,
    PublicacionesClComponent,
    PublicacionInternaClComponent,
    XgslabClComponent,
    TrabajeConNosotrosClComponent,
    VacanteInternaClComponent,
    MenuVerticalClComponent,
    MenuVerticalMxComponent,
    TrabajeConNosotrosMxComponent,
    VacanteInternaMxComponent
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
    ReactiveFormsModule,
    NgxSkeletonLoaderModule.forRoot(),
    APP_ROUTING,
    OwlModule,
    NgxPaginationModule,
    FullCalendarModule,
    NgxCaptchaModule
  ],
  exports: [RouterModule],
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
