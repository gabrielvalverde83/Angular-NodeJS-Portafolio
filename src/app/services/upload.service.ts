import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService{
	public url: string;

	constructor(){
		this.url = Global.url;
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){		//este metodo me va a permitir hacer una peticion ajax clasica en la cual vamos a adjuntar un archivo para subir // le definimos los parametros que le voy a estar pasando, uno es la url a la cual voy a hacer la peticion ajax, otro: los params que son los posibles parametros que le puedo estar enviando que va a ser un array del tipo string, otra va a ser un array del tipo archivo (file) y el parametro o nombre del archivo que va recibir el backend
		return new Promise(function(resolve, reject){		
			var formData:any = new FormData();		//creamos un formulario falso
			var xhr = new XMLHttpRequest();			//xhr sinonimo de ajax

			for(var i = 0; i < files.length; i++){
				formData.append(name, files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){		//cuando haya algun cambio...
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', url, true);
			xhr.send(formData);
		});
	}

}