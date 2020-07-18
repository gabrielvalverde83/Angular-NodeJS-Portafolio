import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [						//array de rutas
	{path: '', component: AboutComponent},		//pagina que se carga por defecto
	{path: 'sobre-mi', component: AboutComponent},		//rutas en español porque son visibles y no codigo
	{path: 'proyectos', component: ProjectsComponent},
	{path: 'crear-proyecto', component: CreateComponent},
	{path: 'contacto', component: ContactComponent},
	{path: 'proyecto/:id', component: DetailComponent},
	{path: 'editar-proyecto/:id', component: EditComponent},
	{path: '**', component: ErrorComponent}		//ruta 404, cuando no sea correcta la ruta que carguemos en el navegador
];

export const appRoutingProviders: any[] = [];		//exportamos el servicio de rutas
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);		//exportamos el routing, llama al router mode y al metodo for root