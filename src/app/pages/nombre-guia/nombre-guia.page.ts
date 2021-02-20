import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

//Importaciones extras
//Importacion para cambiar a diferentes pantallas
import { Router } from '@angular/router';
//Importacion para crear una alerta
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nombre-guia',
  templateUrl: './nombre-guia.page.html',
  styleUrls: ['./nombre-guia.page.scss'],
})



export class NombreGuiaPage implements OnInit {
  //Extracion de los datos de los Inputs
  nombreGuiaI: String;
  cantidadPreguntasI: number;
  //Creacion de Id aleatorios
  ID = Math.floor(Math.random() * 999999);
  //variable que se llenara con los datos de otra pagina
  preguntas: String[];

  public guiaContenedor: {
    id: number;
    Nombre: String;
    cantidadPreguntas: number;
    preguntas: String[];
  };

  constructor(private router: Router, public alerta: AlertController) {}

  public async continuarCreacion(preguntas: String[]) {
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

    return guiaConData.cantidadPreguntas;

  }


  ngOnInit() {}
}
