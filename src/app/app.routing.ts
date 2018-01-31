import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
const appRoutes: Routes = [
	{path: '',redirectTo: '/error', pathMatch: 'full'},
	{path: 'inicio', component: InicioComponent},
	{path: 'pedidos', component: PedidosComponent},
	{path: 'catalogo', component: CatalogoComponent},
	{path: 'perfil', component: PerfilComponent},
	{path: 'promociones', component: PromocionesComponent},
	{path: '**', pathMatch: 'full', redirectTo: '/error'}
];

export const AppRoutingProviders:any[] = [];
export const Routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);