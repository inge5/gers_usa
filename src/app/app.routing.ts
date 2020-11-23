//Importar los módulos del router de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes a los que les quiero hacer una página exclusiva
import { HomeComponent } from './components/home/home.component';
import { NeplanComponent } from './components/neplan/neplan.component';

//Array de rutas
const appRoutes : Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'neplan', component: NeplanComponent}
];

//Exportar el módulo de rutas  
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
