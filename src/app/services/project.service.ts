import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
	public url:string;			//guardo la url de mi api

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;		//aca ya tengo mi servicio definido
	}

	testService(){		//metodo de prubea
		return 'Probando el servicio de Angular';
	}

	
	saveProject(project: Project): Observable<any>{		//le pasamos el parametro project y es un obejo de tipo project, va a devolver un observable
		let params = JSON.stringify(project);	//creamos una variable donde se van a guardar los parametros que vamos a enviar (todos los objertos del proyecto), necesitamos que sea un JSON string para que la api pueda tomarlo
		let headers = new HttpHeaders().set('Content-Type','application/json');		//como se envia la informacion

		return this._http.post(this.url+'save-project', params, {headers: headers});	//le pasamos la url del global, le concateno el metodo de la api save-project, segundo param le paso params los datos a guardar en el backend, le paso un objeto con la propiedad header el valor header
	}

	

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');	//le enviamos la informacion con un content-type

		return this._http.get(this.url+'projects', {headers: headers});
	}
	
	
	getProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'project/'+id, {headers: headers});
	}

	
	deleteProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'project/'+id, {headers: headers});
	}

	

	updateProject(project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'project/'+project._id, params, {headers: headers});
	}
	

}