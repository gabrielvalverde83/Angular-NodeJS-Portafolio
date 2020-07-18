import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})

export class CreateComponent implements OnInit {

	public title: string;
	public project: Project;
	public save_project;
	public status: string;
	public filesToUpload: Array<File>;

  	constructor(
  		private _projectService: ProjectService,
  		private _uploadService: UploadService

  	) { 
  		this.title = "Crear proyecto";
		this.project = new Project('','','','',2019,'','');		//le paso los campos vacios que voy a rellenar con el fomulario // esto viene de models/project.ts
  	}

  	ngOnInit(): void {
  	}

  	onSubmit(form){
		
		// Guardar datos básicos
		this._projectService.saveProject(this.project).subscribe(	/*this.project es el objeto a guardar, metodo suscribe que me permite recoger lo que me devuleve el api rest y suscribirme al observable, para recoger los resultados*/
			response => {
				console.log(response);
			
				if(response.project){
					
					// Subir la imagen
					if(this.filesToUpload){
						this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
						.then((result:any) => {		/*esto tiene 2 funciones de callback, una que me devuelve un response como parametro y otra que me devuelve un posible error*/

							this.save_project = result.project;

							this.status = 'success';
							form.reset();
						});
					}else{
						this.save_project = response.project;
						this.status = 'success';
						form.reset();		//para vaciar el fomulario una vez lleno
					}
					
				}else{
					this.status = 'failed';
				}
			},

			error => {
				console.log(<any>error);
			}
		);
	}

	fileChangeEvent(fileInput: any){
		this.filesToUpload = <Array<File>>fileInput.target.files;
	}

}

