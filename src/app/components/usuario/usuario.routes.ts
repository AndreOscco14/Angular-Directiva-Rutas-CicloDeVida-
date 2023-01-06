import { Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioDetalleComponent } from "./usuario-detalle/usuario-detalle.component";
import { UsuarioEditarComponent } from "./usuario-editar/usuario-editar.component";
import { UsuarioNuevoComponent } from "./usuario-nuevo/usuario-nuevo.component";

export const  USUARIO_ROUTES: Routes = [
    {path: 'nuevo', component: UsuarioNuevoComponent},
    {path: 'editar', component: UsuarioEditarComponent},
    {path: 'detalle', component: UsuarioDetalleComponent},
    {path: '**', pathMatch: 'full' , redirectTo: 'nuevo'}
];

