import { Component, OnInit } from '@angular/core';

//Importaciones extras
//Importacion para cambiar a diferentes pantallas
import { Router } from '@angular/router';
//Importacion para crear una alerta
import { AlertController } from '@ionic/angular';
//Importacion de la plantilla de los datos
import {DatosPregunta} from '../../models/datos-pregunta'

@Component({
  selector: 'app-nombre-guia',
  templateUrl: './nombre-guia.page.html',
  styleUrls: ['./nombre-guia.page.scss'],
})



export class NombreGuiaPage implements OnInit {
  static getCantidadPreguntasI(): number {
    throw new Error('Method not implemented.');
  }
  static continuarCreacionNombre(cantidades: string[]) {
    throw new Error('Method not implemented.');
  }
  //Extracion de los datos de los Inputs
  public nombreGuiaI: String;
  cantidadPreguntasI: number;
  //Creacion de Id aleatorios
  ID = Math.random() * 12;
  //variable que se llenara con los datos de otra pagina
  preguntas: String[];

  public guiaContenedor: {
    id: number;
    Nombre: String;
    cantidadPreguntas: number;
    preguntas: String[];
  };


  constructor(private router: Router, private alerta: AlertController) {


  }

  public async continuarCreacion(preguntas: String[],) {
    this.preguntas = preguntas;
    
    //llenado de los datos
    var guiaConData = (this.guiaContenedor = {
      id: this.ID,
      Nombre: this.nombreGuiaI,
      cantidadPreguntas: this.cantidadPreguntasI,
      preguntas: preguntas,
    });

    //Validasion
    if (
      guiaConData.Nombre === undefined &&
      guiaConData.cantidadPreguntas === undefined
    ) {
      //Alerta por haber dejado solo los dos espacios
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Debes llenar los campos antes de seguir adelante',
          cssClass: 'alertcss',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('OK');
              },
              cssClass: 'buttoncss',
            },
          ],
          backdropDismiss: true,
        });
        await alert.present();
      }

      console.log('Te falto llenar los campos');
    } else if (guiaConData.Nombre === undefined) {
      //Alerta por haber dejado el primer espacio sin informacion
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Te falto llenar el primer campo',
          cssClass: 'alertcss',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('OK');
              },
              cssClass: 'buttoncss',
            },
          ],
          backdropDismiss: true,
        });

        await alert.present();
      }
      console.log('Te falto llenar el primer campo');
    } else if (guiaConData.cantidadPreguntas === undefined) {
      //Alerta por haber dejado el segundo espacio sin informacion
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Te falto llenar segundo campo',
          cssClass: 'alertcss',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('OK');
              },
              cssClass: 'buttoncss',
            },
          ],
          backdropDismiss: true,
        });

        await alert.present();
      }

      console.log('Te falto llenar segundo campo');
    } else if (
      guiaConData.Nombre !== undefined &&
      guiaConData.cantidadPreguntas !== undefined
    ) {
      //llevar a  la siguiente pagina
      this.router.navigateByUrl('crear-guias');
      console.log('COMPLETADO');
      console.log(
        'Id:' + guiaConData.id + '\nNombre:' + guiaConData.Nombre + ''
      );
    }
    
  }
/********************************************************************** */

  public async continuarCreacionNombre(preguntas: string[]) {
    //Definiendo el constructor
    var dataEnviar =new DatosPregunta();

    //llenado de los datos
    this.preguntas = preguntas;
    dataEnviar.setNombre(this.nombreGuiaI);
    dataEnviar.setCantidadPreguntas(this.cantidadPreguntasI);
    this.cantidadPreguntasI = dataEnviar.getCantidadPreguntas();
    console.log(dataEnviar.getNombre());
    //Validasion
    if (
      dataEnviar.getNombre() === undefined && dataEnviar.getNombre() === undefined
    ) {
      //Alerta por haber dejado solo los dos espacios
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Debes llenar los campos antes de seguir adelante',
          cssClass: 'alertcss',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('OK');
              },
              cssClass: 'buttoncss',
            },
          ],
          backdropDismiss: true,
        });

        await alert.present();
      }

      console.log('Te falto llenar los campos');
    } else if (dataEnviar.getNombre() === undefined) {
      //Alerta por haber dejado el primer espacio sin informacion
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Te falto llenar el primer campo',
          cssClass: 'alertcss',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('OK');
              },
              cssClass: 'buttoncss',
            },
          ],
          backdropDismiss: true,
        });

        await alert.present();
      }
      console.log('Te falto llenar el primer campo');
    } else if (dataEnviar.getCantidadPreguntas() === undefined) {
      //Alerta por haber dejado el segundo espacio sin informacion
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Te falto llenar segundo campo',
          cssClass: 'alertcss',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                console.log('OK');
              },
              cssClass: 'buttoncss',
            },
          ],
          backdropDismiss: true,
        });

        await alert.present();
      }

      console.log('Te falto llenar segundo campo');
    } else if (
      dataEnviar.getNombre() !== undefined &&
      dataEnviar.getCantidadPreguntas() !== undefined
    ) {
      //llevar a  la siguiente pagina
      this.router.navigateByUrl('crear-guias');
      console.log(dataEnviar);
      console.log('COMPLETADO');
      dataEnviar.setId(this.ID);
    }
  }
  
  ngOnInit() {
    
  }
}

