import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routing, AppRoutingProviders} from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ErrorComponent } from './shared/error/error.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgressComponent,
    BreadcrumbsComponent,
    ErrorComponent,
    HeaderComponent,
    SidebarComponent,
    InicioComponent,
    PedidosComponent,
    CatalogoComponent,
    PerfilComponent,
    PromocionesComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent,AppRoutingProviders]
})
export class AppModule { }
