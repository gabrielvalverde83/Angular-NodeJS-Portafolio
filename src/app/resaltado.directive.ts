import { Directive, ElementRef } from '@angular/core'; 	//elementref cuando le aplico la directiva a un elemento me consigue el objeto nativo que yo este tocando

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef){ 

  }

   ngOnInit(){
  	  	var element = this.el.nativeElement;
  	    element.style.background = "blue";
  	    element.style.padding = "20px";
  	    element.style.marginTop = "15px";
  	    element.style.color = "white";

  	   	//element.innerText = element.innerText.toUpperCase().replace("CONTACTO","||||");
  }

}
