import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	@Input() anchura: number;
	@Input('etiquetas') captions: boolean;
  	@Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){

    this.autor = {				//es el componente hijo que le paso al padre
      nombre: "Gabriel Valverde",
      website: "gabrielvalverde.com",
      youtube: "Gabriel Valverde YOUTUBE"
    };

  }

  ngOnInit() {
		$("#logo").click(function(e){
  		e.preventDefault();

  		$("header").css("background","green")
  				   .css("height","50px");
  	});

  	$('.galeria').bxSlider({
	    mode: 'fade',
	    captions: this.captions,
	    slideWidth: this.anchura
	  });

    // Lanzar evento
     this.conseguirAutor.emit(this.autor);

  }

  lanzar(event){
    this.conseguirAutor.emit(this.autor);
  }

}













/*

import { Component, OnInit } from '@angular/core';declare var $:any;
declare var $:any;

@Component({

  selector: 'slider',		//figuraba como app-slider
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$("#logo").click(function(e){
  		e.preventDefault();	//al hacer click en el logo no me redirige la pagina

  		$("header").css("background", "green")
  				   .css("height", "85px");
  	});

  	$('.galeria').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 500
 	});

  }

}

*/
