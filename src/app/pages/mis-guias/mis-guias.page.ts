import { Component, OnInit } from '@angular/core';

//Componente de rutas
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular/providers/alert-controller';
import { DatosPregunta } from 'src/app/models/datos-pregunta';

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


  public inicio(){
    this.router.navigateByUrl('inicio');
  }

  public sinGuias(){

  }

  ngOnInit() {
  
  }

}
