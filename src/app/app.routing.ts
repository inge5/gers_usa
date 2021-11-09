import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColombiaComponent } from './colombia/colombia.component';
import { HomeComponent } from './colombia/home/home.component';
import { NeplanComponent } from './colombia/representaciones/neplan/neplan.component';
import { BeckwithElectronicComponent } from './colombia/representaciones/beckwith-electronic/beckwith-electronic.component';
import { XgslabComponent } from './colombia/representaciones/xgslab/xgslab.component';
import { DranetzComponent } from './colombia/representaciones/dranetz/dranetz.component';
import { NdbComponent } from './colombia/representaciones/ndb/ndb.component';
import { ProyectosComponent } from './colombia/proyectos/proyectos.component';
import { PruebasAutomatizacionControlComponent } from './colombia/servicios/pruebas-automatizacion-control/pruebas-automatizacion-control.component';
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
import { VacanteInternaComponent } from './colombia/vacante-interna/vacante-interna.component';
import { PublicacionesComponent } from './colombia/publicaciones/publicaciones.component';
import { PublicacionInternaComponent } from './colombia/publicaciones/publicacion-interna/publicacion-interna.component';
import { DetalleProductoComponent } from "./colombia/productos/detalle-producto/detalle-producto.component";
import { ProductoComponent } from "./colombia/productos/producto/producto.component";

/* Chile*/
import { ChileComponent } from './chile/chile/chile.component';
import { NeplanClComponent } from './chile/representaciones/neplan-cl/neplan-cl.component';
import { HomeClComponent } from './chile/home-cl/home-cl.component';
import { PensamientoCorporativoClComponent } from './chile/nosotros/pensamiento-corporativo-cl/pensamiento-corporativo-cl.component';
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

/* USA */
import { UsaComponent } from './usa/usa/usa.component';
import { HomeUsaComponent } from './usa/home-usa/home-usa.component';
import { ContactComponent } from './usa/contact/contact.component';
import { CorporateThinkingComponent } from './usa/corporate-thinking/corporate-thinking.component';
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
import { CapacitacionComponent } from './colombia/capacitacion/capacitacion.component';
import { InternaCapacitacionComponent } from './colombia/interna-capacitacion/interna-capacitacion.component';
import { TrainingsComponent } from './usa/trainings/trainings.component';
import { InternalTrainingsComponent } from './usa/internal-trainings/internal-trainings.component';
import { CapacitacionChileComponent } from './chile/capacitacion-chile/capacitacion-chile.component';
import { InternaCapacitacionChileComponent } from './chile/interna-capacitacion-chile/interna-capacitacion-chile.component';
import { MexicoComponent } from './mexico/mexico/mexico.component';
import { CapacitacionMexicoComponent } from './mexico/capacitacion-mexico/capacitacion-mexico.component';
import { InternaCapacitacionMexicoComponent } from './mexico/interna-capacitacion-mexico/interna-capacitacion-mexico.component';
import { ContactenosMxComponent } from './mexico/contactenos-mx/contactenos-mx.component';
import { PensamientoCorporativoMxComponent } from './mexico/nosotros/pensamiento-corporativo-mx/pensamiento-corporativo-mx.component';
import { PoliticaGestionIntegralMxComponent } from './mexico/nosotros/politica-gestion-integral-mx/politica-gestion-integral-mx.component';
import { PruebasAutomatizacionControlMxComponent } from './mexico/servicios/pruebas-automatizacion-control-mx/pruebas-automatizacion-control-mx.component';
import { SmartGridsMxComponent } from './mexico/servicios/smart-grids-mx/smart-grids-mx.component'
import { AnalisisCalidadEnergiaMxComponent } from './mexico/servicios/analisis-calidad-energia-mx/analisis-calidad-energia-mx.component';
import { PlaneacionProyectosMxComponent } from './mexico/servicios/planeacion-proyectos-mx/planeacion-proyectos-mx.component';
import { EstudiosSistemasMxComponent } from './mexico/servicios/estudios-sistemas-mx/estudios-sistemas-mx.component';
import { HomeMxComponent } from './mexico/home-mx/home-mx.component';
import { DisenoIngenieriaMxComponent } from './mexico/servicios/diseno-ingenieria-mx/diseno-ingenieria-mx.component';
import { NeplanMxComponent } from './mexico/representaciones/neplan-mx/neplan-mx.component';
import { BeckwithElectronicMxComponent } from './mexico/representaciones/beckwith-electronic-mx/beckwith-electronic-mx.component';
import { XgslabMxComponent } from './mexico/representaciones/xgslab-mx/xgslab-mx.component';
import { ProyectosMxComponent } from './mexico/proyectos-mx/proyectos-mx.component';
import { PublicacionesMxComponent } from './mexico/publicaciones-mx/publicaciones-mx.component';
import { TrabajeConNosotrosMxComponent } from './mexico/trabaje-con-nosotros-mx/trabaje-con-nosotros-mx.component';
import { VacanteInternaMxComponent } from './mexico/trabaje-con-nosotros-mx/vacante-interna-mx/vacante-interna-mx.component';
import { BuscadorComponent } from './colombia/buscador/buscador.component';
import { BuscadorClComponent } from './chile/buscador-cl/buscador-cl.component';
import { BuscadorUsaComponent } from './usa/buscador-usa/buscador-usa.component';
import { BuscadorMxComponent } from './mexico/buscador-mx/buscador-mx.component';
import { TerceriasAsesoriasMxComponent } from './mexico/servicios/tercerias-asesorias-mx/tercerias-asesorias-mx.component';
import { PublicacionInternaMxComponent } from './mexico/publicaciones-mx/publicacion-interna-mx/publicacion-interna-mx.component';
import { DranetzClComponent } from './chile/representaciones/dranetz-cl/dranetz-cl.component';
import { DataProtectionPolicyComponent } from './usa/contact/data-protection-policy/data-protection-policy.component';
import { GossenMetrawattComponent } from './colombia/representaciones/gossen-metrawatt/gossen-metrawatt.component';
import { environment } from '../environments/environment';


let APP_ROUTES: Routes = [];
// const APP_ROUTES: Routes = [

//     {path: 'colombia', component: ColombiaComponent,
//     children: [
//         {path: '', component: HomeComponent},
//         {path: 'neplan', component: NeplanComponent},
//         {path: 'beckwith-electric', component: BeckwithElectronicComponent},
//         {path: 'xgslab', component: XgslabComponent},
//         {path: 'dranetz', component: DranetzComponent},
//         {path: 'ndb', component: NdbComponent},
//         {path: 'capacitaciones', component: CapacitacionComponent},
//         {path: 'capacitaciones/:id', component: InternaCapacitacionComponent},
//         {path: 'proyectos', component: ProyectosComponent},
//         {path: 'productos', component: ProductoComponent},
//         {path: 'detalle-productos/:codigo/:nombre', component: DetalleProductoComponent},
//         {path: 'estudios-de-sistemas-electricos', component: EstudiosSistemasComponent},
//         {path: 'smart-grids', component: SmartGridsComponent},
//         {path: 'diseno-e-ingenieria', component: DisenoIngenieriaComponent},
//         {path: 'servicios-energeticos', component: ServiciosEnergeticosComponent},
//         {path: 'interventoria-y-asesoria', component: InterventoriasAsesoriasComponent},
//         {path: 'planeacion-de-proyectos', component: PlaneacionProyectosComponent},
//         {path: 'contactenos', component: ContactenosComponent},
//         {path: 'pensamiento-corporativo', component: PensamientoCorporativoComponent},
//         {path: 'politica-gestion-integral', component: PoliticaGestionIntegralComponent},
//         {path: 'acuerdos-internacionales', component: AcuerdosInternacionalesComponent},
//         {path: 'trabaje-con-nosotros', component: TrabajeConNosotrosComponent},
//         {path: 'vacante-interna', component: VacanteInternaComponent},
//         {path: 'vacantes/:slug', component: VacanteInternaComponent},
//         {path: 'publicaciones', component: PublicacionesComponent},
//         {path: 'publicaciones/:slug', component: PublicacionInternaComponent},
//         {path: 'pruebas-automatizacion-y-control', component: PruebasAutomatizacionControlComponent},
//         {path: 'buscador', component: BuscadorComponent},
//         {path: 'gossen-metrawatt', component: GossenMetrawattComponent},
//         {path: '**', redirectTo: 'colombia', pathMatch:'full'}
//       ]},

//     //Rutas de Chile
//     {path: 'chile', component: ChileComponent,
//     children: [
//         { path: '', component: HomeClComponent },
//         { path: 'pensamiento-corporativo-cl', component: PensamientoCorporativoClComponent },
//         { path: 'capacitaciones', component: CapacitacionChileComponent},
//         { path: 'capacitaciones/:id', component: InternaCapacitacionChileComponent},
//         { path: 'politica-gestion-integral-cl', component: PoliticaGestionIntegralClComponent },
//         { path: 'estudios-sistemas-cl', component: EstudiosSistemasElectricosClComponent },
//         { path: 'diseno-ingenieria-cl', component: DisenoEIngenieriaClComponent },
//         { path: 'pruebas-automatizacion-cl', component: PruebasAutomatizacionControlClComponent },
//         { path: 'neplan-cl', component: NeplanClComponent },
//         { path: 'contactenos-cl', component: ContactenosClComponent },
//         { path: 'proyectos-cl', component: ProyectosClComponent },
//         { path: 'publicaciones-cl', component: PublicacionesClComponent},
//         { path: 'publicaciones-cl/:slug', component: PublicacionInternaClComponent},
//         { path: 'xgslab-cl', component: XgslabClComponent },
//         { path: 'dranetz-cl', component: DranetzClComponent },
//         { path: 'trabaje-con-nosotros-cl', component: TrabajeConNosotrosClComponent },
//         { path: 'vacantes/:slug', component: VacanteInternaClComponent },
//         {path: 'buscador', component: BuscadorClComponent},
//         {path: '**', redirectTo: 'chile', pathMatch:'full'}
//         ]},

//     // //Rutas de USA
//     // {path: 'home-usa', component: HomeUsaComponent},
//     {path: 'usa', component: UsaComponent,
//     children: [
//         { path: '', component: HomeUsaComponent },
//         { path: 'contact', component: ContactComponent },
//         { path: 'corporate-thinking', component: CorporateThinkingComponent },
//         { path: 'trainings' , component: TrainingsComponent },
//         { path: 'trainings/:id' , component: InternalTrainingsComponent },
//         { path: 'integral-management-policies', component: IntegralManagementPoliciesComponent },
//         { path: 'neplan-usa', component: NeplanUsaComponent },
//         { path: 'power-system-studies', component: PowerSystemStudiesComponent },
//         { path: 'smart-grids-usa', component: SmartGridsUsaComponent },
//         { path: 'protection-and-control', component: ProtectionAndControlComponent },
//         { path: 'field-services', component: FieldServicesComponent },
//         { path: 'projects', component: ProyectsComponent },
//         { path: 'work-with-us', component: WorkWithUsComponent },
//         { path: 'vacancies/:slug', component: InternalVacancyComponent},
//         { path: 'insights', component: InsightsComponent },
//         { path: 'insights/:slug', component: InsightsInsideComponent },
//         { path: 'searcher', component: BuscadorUsaComponent },
//         { path: 'data-protection-policy', component: DataProtectionPolicyComponent},
//         {path: '**', redirectTo: 'usa', pathMatch:'full'}
//     ]},
//     {path: 'mexico', component: MexicoComponent, children: [
//         {path: '', component: HomeMxComponent},
//         {path: 'capacitaciones', component: CapacitacionMexicoComponent},
//         {path: 'capacitaciones/:id', component: InternaCapacitacionMexicoComponent},
//         {path: 'contactenos', component: ContactenosMxComponent},
//         {path: 'pensamiento-corporativo', component: PensamientoCorporativoMxComponent},
//         {path: 'politica-gestion-integral', component: PoliticaGestionIntegralMxComponent},
//         {path: 'pruebas-automatizacion-y-control', component: PruebasAutomatizacionControlMxComponent},
//         {path: 'smart-grids', component: SmartGridsMxComponent},
//         {path: 'analisis-calidad-energia', component: AnalisisCalidadEnergiaMxComponent},
//         {path: 'planeacion-de-proyectos', component: PlaneacionProyectosMxComponent},
//         {path: 'estudios-de-sistemas-electricos', component: EstudiosSistemasMxComponent},
//         {path: 'diseno-e-ingenieria', component: DisenoIngenieriaMxComponent},
//         {path: 'tercerias-y-asesorias', component: TerceriasAsesoriasMxComponent},
//         {path: 'neplan', component: NeplanMxComponent},
//         {path: 'beckwith-electronic', component: BeckwithElectronicMxComponent},
//         {path: 'xgslab', component: XgslabMxComponent},
//         {path: 'proyectos', component: ProyectosMxComponent},
//         {path: 'publicaciones', component: PublicacionesMxComponent},
//         {path: 'publicaciones/:slug', component: PublicacionInternaMxComponent},
//         { path: 'trabaje-con-nosotros', component: TrabajeConNosotrosMxComponent},
//         { path: 'vacantes/:slug', component: VacanteInternaMxComponent },
//         {path: 'buscador', component: BuscadorMxComponent},
//         {path: '**', redirectTo: 'mexico', pathMatch:'full'}

//     ]},

//     // {path: '**', pathMatch: 'full', redirectTo: '/colombia'}

// ];

if (window.location.host === environment.colombiaLocal) {
    APP_ROUTES = [
        {
            path: '', component: ColombiaComponent,
            children: [
                { path: '', component: HomeComponent },
                { path: 'neplan', component: NeplanComponent },
                { path: 'beckwith-electric', component: BeckwithElectronicComponent },
                { path: 'xgslab', component: XgslabComponent },
                { path: 'dranetz', component: DranetzComponent },
                { path: 'ndb', component: NdbComponent },
                { path: 'capacitaciones', component: CapacitacionComponent },
                { path: 'capacitaciones/:id', component: InternaCapacitacionComponent },
                { path: 'proyectos', component: ProyectosComponent },
                { path: 'productos', component: ProductoComponent },
                { path: 'detalle-productos/:codigo/:nombre', component: DetalleProductoComponent },
                { path: 'estudios-de-sistemas-electricos', component: EstudiosSistemasComponent },
                { path: 'smart-grids', component: SmartGridsComponent },
                { path: 'diseno-e-ingenieria', component: DisenoIngenieriaComponent },
                { path: 'servicios-energeticos', component: ServiciosEnergeticosComponent },
                { path: 'interventoria-y-asesoria', component: InterventoriasAsesoriasComponent },
                { path: 'planeacion-de-proyectos', component: PlaneacionProyectosComponent },
                { path: 'contactenos', component: ContactenosComponent },
                { path: 'pensamiento-corporativo', component: PensamientoCorporativoComponent },
                { path: 'politica-gestion-integral', component: PoliticaGestionIntegralComponent },
                { path: 'acuerdos-internacionales', component: AcuerdosInternacionalesComponent },
                { path: 'trabaje-con-nosotros', component: TrabajeConNosotrosComponent },
                { path: 'vacante-interna', component: VacanteInternaComponent },
                { path: 'vacantes/:slug', component: VacanteInternaComponent },
                { path: 'publicaciones', component: PublicacionesComponent },
                { path: 'publicaciones/:slug', component: PublicacionInternaComponent },
                { path: 'pruebas-automatizacion-y-control', component: PruebasAutomatizacionControlComponent },
                { path: 'buscador', component: BuscadorComponent },
                { path: 'gossen-metrawatt', component: GossenMetrawattComponent },
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ]
        },
        { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
}
if (window.location.host === environment.mexicoLocal) {
    APP_ROUTES = [
        {
            path: '', component: MexicoComponent, children: [
                { path: '', component: HomeMxComponent },
                { path: 'capacitaciones', component: CapacitacionMexicoComponent },
                { path: 'capacitaciones/:id', component: InternaCapacitacionMexicoComponent },
                { path: 'contactenos', component: ContactenosMxComponent },
                { path: 'pensamiento-corporativo', component: PensamientoCorporativoMxComponent },
                { path: 'politica-gestion-integral', component: PoliticaGestionIntegralMxComponent },
                { path: 'pruebas-automatizacion-y-control', component: PruebasAutomatizacionControlMxComponent },
                { path: 'smart-grids', component: SmartGridsMxComponent },
                { path: 'analisis-calidad-energia', component: AnalisisCalidadEnergiaMxComponent },
                { path: 'planeacion-de-proyectos', component: PlaneacionProyectosMxComponent },
                { path: 'estudios-de-sistemas-electricos', component: EstudiosSistemasMxComponent },
                { path: 'diseno-e-ingenieria', component: DisenoIngenieriaMxComponent },
                { path: 'tercerias-y-asesorias', component: TerceriasAsesoriasMxComponent },
                { path: 'neplan', component: NeplanMxComponent },
                { path: 'beckwith-electronic', component: BeckwithElectronicMxComponent },
                { path: 'xgslab', component: XgslabMxComponent },
                { path: 'proyectos', component: ProyectosMxComponent },
                { path: 'publicaciones', component: PublicacionesMxComponent },
                { path: 'publicaciones/:slug', component: PublicacionInternaMxComponent },
                { path: 'trabaje-con-nosotros', component: TrabajeConNosotrosMxComponent },
                { path: 'vacantes/:slug', component: VacanteInternaMxComponent },
                { path: 'buscador', component: BuscadorMxComponent },
                { path: '**', redirectTo: '', pathMatch: 'full' }

            ]
        },
        { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
}
if (window.location.host === environment.chileLocal) {
    APP_ROUTES = [
        {
            path: '', component: ChileComponent,
            children: [
                { path: '', component: HomeClComponent },
                { path: 'pensamiento-corporativo-cl', component: PensamientoCorporativoClComponent },
                { path: 'capacitaciones', component: CapacitacionChileComponent },
                { path: 'capacitaciones/:id', component: InternaCapacitacionChileComponent },
                { path: 'politica-gestion-integral-cl', component: PoliticaGestionIntegralClComponent },
                { path: 'estudios-sistemas-cl', component: EstudiosSistemasElectricosClComponent },
                { path: 'diseno-ingenieria-cl', component: DisenoEIngenieriaClComponent },
                { path: 'pruebas-automatizacion-cl', component: PruebasAutomatizacionControlClComponent },
                { path: 'neplan-cl', component: NeplanClComponent },
                { path: 'contactenos-cl', component: ContactenosClComponent },
                { path: 'proyectos-cl', component: ProyectosClComponent },
                { path: 'publicaciones-cl', component: PublicacionesClComponent },
                { path: 'publicaciones-cl/:slug', component: PublicacionInternaClComponent },
                { path: 'xgslab-cl', component: XgslabClComponent },
                { path: 'dranetz-cl', component: DranetzClComponent },
                { path: 'trabaje-con-nosotros-cl', component: TrabajeConNosotrosClComponent },
                { path: 'vacantes/:slug', component: VacanteInternaClComponent },
                { path: 'buscador', component: BuscadorClComponent },
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ]
        },
        { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
}
if (window.location.host === environment.usaLocal) {
    APP_ROUTES = [
        {
            path: '', component: UsaComponent,
            children: [
                { path: '', component: HomeUsaComponent },
                { path: 'contact', component: ContactComponent },
                { path: 'corporate-thinking', component: CorporateThinkingComponent },
                { path: 'trainings', component: TrainingsComponent },
                { path: 'trainings/:id', component: InternalTrainingsComponent },
                { path: 'integral-management-policies', component: IntegralManagementPoliciesComponent },
                { path: 'neplan-usa', component: NeplanUsaComponent },
                { path: 'power-system-studies', component: PowerSystemStudiesComponent },
                { path: 'smart-grids-usa', component: SmartGridsUsaComponent },
                { path: 'protection-and-control', component: ProtectionAndControlComponent },
                { path: 'field-services', component: FieldServicesComponent },
                { path: 'projects', component: ProyectsComponent },
                { path: 'work-with-us', component: WorkWithUsComponent },
                { path: 'vacancies/:slug', component: InternalVacancyComponent },
                { path: 'insights', component: InsightsComponent },
                { path: 'insights/:slug', component: InsightsInsideComponent },
                { path: 'searcher', component: BuscadorUsaComponent },
                { path: 'data-protection-policy', component: DataProtectionPolicyComponent },
                { path: '**', redirectTo: '', pathMatch: 'full' }
            ]
        },
        { path: '**', pathMatch: 'full', redirectTo: '' }
    ]
}



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
    useHash: true,
    onSameUrlNavigation: "ignore",
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
});
