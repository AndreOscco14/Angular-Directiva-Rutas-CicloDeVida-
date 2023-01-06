import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent {


  constructor(private router: ActivatedRoute 
      ){

    this.router.parent.params.subscribe(parametros => {
      console.log("RUTA HIJA , Usuario Nuevo");
      console.log(parametros);
    })

  }

}
