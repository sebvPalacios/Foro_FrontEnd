import { Routes } from '@angular/router';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioDetallesComponent } from './components/usuario-detalles/usuario-detalles.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EditarComponent } from './components/editar/editar.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
    { path: 'list', component: UsuarioListComponent },
    { path: 'list/:id', component: UsuarioDetallesComponent},
    { path: 'editar/:id', component: EditarComponent},
    { path: 'registro', component: RegistroComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', redirectTo: 'list', pathMatch: 'full'}
];
