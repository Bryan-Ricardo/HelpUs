import { Injectable } from '@angular/core';
import { CantidadPreguntas } from '../models/cantidad-preguntas';

@Injectable({
  providedIn: 'root'
})
export class CantidadPreguntasService {


  public cantidadPreguntas: CantidadPreguntas[] = [];

  constructor() { 

    const cantidadPreguntas =new CantidadPreguntas(10);

    this.cantidadPreguntas.push(cantidadPreguntas);
  }
}
