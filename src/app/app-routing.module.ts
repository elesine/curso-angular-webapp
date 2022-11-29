import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'productos', component: ProductosListComponent},
	{path: 'crear-producto', component: ProductoAddComponent},
	{path: 'producto/:id', component: ProductoDetailComponent},
	{path: 'editar-producto/:id', component: ProductoEditComponent},
	{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
