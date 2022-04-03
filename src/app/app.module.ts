import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { RouterModule } from '@angular/router';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { APP_ROUTING } from './app.routing';

//Services Estados Unidos
import { HomeUsaService } from './services/home-usa.service';
import { PagesUsaService } from './services/pages-usa.service';
import { VacantesUsaService } from './services/vacantes-usa.service';
import { PublicacionesUsaService } from './services/publicaciones-usa.service';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';

import { OwlModule } from 'ngx-owl-carousel';
import { NgxPaginationModule } from 'ngx-pagination';

//USA COMPONENTS
import { UsaComponent } from './usa/usa/usa.component';
import { MenuPrincipalUsaComponent } from './usa/menu-principal-usa/menu-principal-usa.component';
import { TopbarComponent } from './usa/topbar/topbar.component';
import {
  HomeUsaComponent,
  SafeHtmlPipe,
} from './usa/home-usa/home-usa.component';
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
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin!
import listPlugin from '@fullcalendar/list';
import { CharPipe } from './pipes/char.pipe';

FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin,
]);

// Componentes Usa

import { TrainingsComponent } from './usa/trainings/trainings.component';
import { InternalTrainingsComponent } from './usa/internal-trainings/internal-trainings.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { BuscadorUsaComponent } from './usa/buscador-usa/buscador-usa.component';
import { DataProtectionPolicyComponent } from './usa/contact/data-protection-policy/data-protection-policy.component';
import { FormCotizadorNeplanUsaComponent } from './usa/representaciones/neplan-usa/form-cotizador-neplan-usa/form-cotizador-neplan-usa.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
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
    CharPipe,
    TrainingsComponent,
    InternalTrainingsComponent,
    FilterPipe,
    BuscadorUsaComponent,
    DataProtectionPolicyComponent,
    FormCotizadorNeplanUsaComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    IvyCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AngularPaginatorModule,
    NgxSkeletonLoaderModule.forRoot(),
    APP_ROUTING,
    OwlModule,
    NgxPaginationModule,
    FullCalendarModule,
    NgxCaptchaModule,
  ],
  exports: [RouterModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'en' },
    //ESTADOS UNIDOS
    HomeUsaService,
    PagesUsaService,
    VacantesUsaService,
    PublicacionesUsaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
