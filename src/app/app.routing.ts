import { Routes, RouterModule } from '@angular/router';

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
import { TrainingsComponent } from './usa/trainings/trainings.component';
import { InternalTrainingsComponent } from './usa/internal-trainings/internal-trainings.component';
import { BuscadorUsaComponent } from './usa/buscador-usa/buscador-usa.component';
import { DataProtectionPolicyComponent } from './usa/contact/data-protection-policy/data-protection-policy.component';

let APP_ROUTES: Routes = [];

APP_ROUTES = [
  {
    path: '',
    component: UsaComponent,
    children: [
      { path: '', component: HomeUsaComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'corporate-thinking', component: CorporateThinkingComponent },
      { path: 'trainings', component: TrainingsComponent },
      { path: 'trainings/:id', component: InternalTrainingsComponent },
      {
        path: 'integral-management-policies',
        component: IntegralManagementPoliciesComponent,
      },
      { path: 'neplan-usa', component: NeplanUsaComponent },
      { path: 'power-system-studies', component: PowerSystemStudiesComponent },
      { path: 'smart-grids-usa', component: SmartGridsUsaComponent },
      {
        path: 'protection-and-control',
        component: ProtectionAndControlComponent,
      },
      { path: 'field-services', component: FieldServicesComponent },
      { path: 'projects', component: ProyectsComponent },
      { path: 'work-with-us', component: WorkWithUsComponent },
      { path: 'vacancies/:slug', component: InternalVacancyComponent },
      { path: 'insights', component: InsightsComponent },
      { path: 'insights/:slug', component: InsightsInsideComponent },
      { path: 'searcher', component: BuscadorUsaComponent },
      {
        path: 'data-protection-policy',
        component: DataProtectionPolicyComponent,
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {
  useHash: false,
  onSameUrlNavigation: 'ignore',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  initialNavigation: 'enabled',
});
