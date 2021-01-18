import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCrearComponent } from './Componentes/usuario-crear/usuario-crear.component';
import { UsuarioListarComponent } from './Componentes/usuario-listar/usuario-listar.component';
import { UsuarioModificarComponent } from './Componentes/usuario-modificar/usuario-modificar.component';
import { LoginComponent } from './Componentes/login/login.component';

const routes: Routes = [
  { path:"usuario-crear", component:UsuarioCrearComponent },
  {path:"usuario-listar", component:UsuarioListarComponent},
  {path:"usuario-modificar", component:UsuarioModificarComponent},
  {path:"login", component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
