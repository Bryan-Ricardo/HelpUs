import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPregunta } from 'src/app/models/datos-pregunta';

@Component({
  selector: 'app-guia-completada',
  templateUrl: './guia-completada.page.html',
  styleUrls: ['./guia-completada.page.scss'],
})
export class GuiaCompletadaPage implements OnInit {

  cantidadPreguntasI: number;
  nombre: string;

  constructor(private router: Router) {

    var data = new DatosPregunta();
    console.log(data.getCantidadPreguntasLocalHost());
    //Extraccion de la cantidad de preguntas
    this.cantidadPreguntasI = data.getCantidadPreguntasLocalHost();
    console.log('Cantidad de preguntas: ' + this.cantidadPreguntasI);
    //Extraccion del nombre
    this.nombre = data.getNombreLocalHost();
    console.log('Nombre: ' + this.nombre);
   }

  ngOnInit() {
  }

  public finalizado(){
    this.router.navigateByUrl('inicio');
  }

}
