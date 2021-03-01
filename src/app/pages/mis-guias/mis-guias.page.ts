import { Component, OnInit } from '@angular/core';

//Componente de rutas
import { Router } from '@angular/router';
import { BorradorRespuestas } from 'src/app/models/borrador-respuestas';
import { DatosPregunta } from 'src/app/models/datos-pregunta';

//Boorador de respuestas


@Component({
  selector: 'app-mis-guias',
  templateUrl: './mis-guias.page.html',
  styleUrls: ['./mis-guias.page.scss'],
})
export class MisGuiasPage implements OnInit {


  preguntas: string[];
  cantidadPreguntasI: number;
  nombre: string;

  constructor(private router: Router) {
  
    //Borrando datos
    var borrarRespuestas = new BorradorRespuestas();
    borrarRespuestas;

     /*Extrallendo los datos */
     var data = new DatosPregunta();
     console.log(data.getCantidadPreguntasLocalHost());
     //Extraccion de la cantidad de preguntas
     this.cantidadPreguntasI = data.getCantidadPreguntasLocalHost();
     console.log('Cantidad de preguntas: ' + this.cantidadPreguntasI);
     this.preguntas = Array(this.cantidadPreguntasI);
     //Extraccion del nombre
     this.nombre = data.getNombreLocalHost();
     console.log('Nombre: ' + this.nombre);
   }


  public atras(){
    this.router.navigateByUrl('inicio');
  }

  public simulador(){
    this.router.navigateByUrl('simulador');
  }

  ngOnInit() {
  
  }

}
