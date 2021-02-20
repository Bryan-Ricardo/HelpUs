import { Component, OnInit ,Input} from '@angular/core';
import { CantidadPreguntasService } from '../../services/cantidad-preguntas.service';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

import { CantidadPreguntas } from '../../models/cantidad-preguntas';

//Mis componentes
import {NombreGuiaPage} from "../nombre-guia/nombre-guia.page";

@Component({
  selector: 'app-crear-guias',
  templateUrl: './crear-guias.page.html',
  styleUrls: ['./crear-guias.page.scss'],
})



export class CrearGuiasPage{

  
    pregunta1 : string;
    cantidades : string[];
    cantidadExtraida : number;
    

  constructor(public cantidadPreguntasService: CantidadPreguntasService, private router: Router, private alerta: AlertController) {

    /*var cantidadExtraida = */

    console.log(this.cantidadExtraida);
    this.cantidades = Array(10);
    
   }

   
   getData(cantidad){
    console.log(this.pregunta1);
    


    if(cantidad != null){
      this.router.navigateByUrl("mis-guias");
    }else if(cantidad == null){

      //Crear una alerta
      let alertaCompletado = this.alerta.create({
        
      });

    }
  }


}

