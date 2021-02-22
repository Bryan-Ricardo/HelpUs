import { Component, OnInit ,Input} from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

//Mis Modulos
import {DatosPregunta} from '../../models/datos-pregunta'
import {EstiloPreguntas} from '../../models/estilo-preguntas'

//Mis componentes
import { NombreGuiaPage } from '../nombre-guia/nombre-guia.page';

//Creador de JSON 
import * as fs from '../../../../node_modules/fs-extra';

@Component({
  selector: 'app-crear-guias',
  templateUrl: './crear-guias.page.html',
  styleUrls: ['./crear-guias.page.scss'],
})



export class CrearGuiasPage{


    pregunta1 : string;
    preguntas : string[];
    cantidadPreguntasI: number;
    nombre : string;    

  constructor( private router: Router, private alerta: AlertController) {

        /*Extrallendo los datos */
    var data =  new DatosPregunta();
    console.log(data.getCantidadPreguntas())
    //Extraccion de la cantidad de preguntas
    this.cantidadPreguntasI = data.getCantidadPreguntas();
    console.log("Cantidad de preguntas: "+ this.cantidadPreguntasI);
    this.preguntas = Array(this.cantidadPreguntasI);
    //Extraccion del nombre
    this.nombre = data.getNombreLocalHost();
    console.log("Nombre: "+ this.nombre);
 }
   
  

  save(){
    /*Extrallendo los datos */
    var data =  new DatosPregunta();
    console.log(data.getCantidadPreguntas())
    //Extraccion de la cantidad de preguntas
    this.cantidadPreguntasI = data.getCantidadPreguntas();
    console.log("Cantidad de preguntas: "+ this.cantidadPreguntasI);
    if(this.cantidadPreguntasI == 1){
      this.save1()
    }else if(this.cantidadPreguntasI == 2){
      this.save2()
    }
  }

  /*extraccionDataPreguntas(){
    var data = new EstiloPreguntas;
    data.setPregunta(this.pregunta1)
  }*/

  save1(){
    console.log("Guardado 1")
  }
  save2(){
    console.log("Guardado 2")
  }


}

