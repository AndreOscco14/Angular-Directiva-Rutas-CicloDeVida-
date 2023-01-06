import { Directive , ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( 
    private elemento: ElementRef 
  )
   { 
    console.log("Directiva Llamada");
    // elemento.nativeElement.style.backgroundColor = "yellow";
   }
   
 @Input("appResaltado") nuevoColor: string | undefined;



   @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
    // this.elemento.nativeElement.style.backgroundColor = "yellow";
   }

   @HostListener('mouseleave') mouseSalio(){
    // this.resaltar(null) ;
    this.elemento.nativeElement.style.backgroundColor = null;
   }

   private resaltar(color:string) {
    this.elemento.nativeElement.style.backgroundColor = color;
   }

}
