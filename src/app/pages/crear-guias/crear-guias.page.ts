import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

//Mis Modulos
import { DatosPregunta } from '../../models/datos-pregunta';
import { EstiloPreguntas } from '../../models/estilo-preguntas';

//Mis componentes
import { NombreGuiaPage } from '../nombre-guia/nombre-guia.page';

//Creador de JSON
import * as fs from '../../../../node_modules/fs-extra';

@Component({
  selector: 'app-crear-guias',
  templateUrl: './crear-guias.page.html',
  styleUrls: ['./crear-guias.page.scss'],
})
export class CrearGuiasPage {
  pregunta1: string;
  pregunta2: string;
  pregunta3: string;
  pregunta4: string;
  pregunta5: string;
  pregunta6: string;
  pregunta7: string;
  pregunta8: string;
  pregunta9: string;
  pregunta10: string;
  pregunta11: string;
  pregunta12: string;
  pregunta13: string;
  pregunta14: string;
  pregunta15: string;
  pregunta16: string;
  pregunta17: string;
  pregunta18: string;
  pregunta19: string;
  pregunta20: string;
  pregunta21: string;
  pregunta22: string;
  pregunta23: string;
  pregunta24: string;
  pregunta25: string;
  pregunta26: string;
  pregunta27: string;
  pregunta28: string;
  pregunta29: string;
  pregunta30: string;
  pregunta31: string;
  pregunta32: string;
  pregunta33: string;
  pregunta34: string;
  pregunta35: string;
  pregunta36: string;
  pregunta37: string;
  pregunta38: string;
  pregunta39: string;
  pregunta40: string;

  correcta1: string;
  correcta2: string;
  correcta3: string;
  correcta4: string;
  correcta5: string;
  correcta6: string;
  correcta7: string;
  correcta8: string;
  correcta9: string;
  correcta10: string;
  correcta11: string;
  correcta12: string;
  correcta13: string;
  correcta14: string;
  correcta15: string;
  correcta16: string;
  correcta17: string;
  correcta18: string;
  correcta19: string;
  correcta20: string;
  correcta21: string;
  correcta22: string;
  correcta23: string;
  correcta24: string;
  correcta25: string;
  correcta26: string;
  correcta27: string;
  correcta28: string;
  correcta29: string;
  correcta30: string;
  correcta31: string;
  correcta32: string;
  correcta33: string;
  correcta34: string;
  correcta35: string;
  correcta36: string;
  correcta37: string;
  correcta38: string;
  correcta39: string;
  correcta40: string;

  respuesta1: string;
  respuesta2: string;
  respuesta3: string;
  respuesta4: string;
  respuesta5: string;
  respuesta6: string;
  respuesta7: string;
  respuesta8: string;
  respuesta9: string;
  respuesta10: string;
  respuesta11: string;
  respuesta12: string;
  respuesta13: string;
  respuesta14: string;
  respuesta15: string;
  respuesta16: string;
  respuesta17: string;
  respuesta18: string;
  respuesta19: string;
  respuesta20: string;
  respuesta21: string;
  respuesta22: string;
  respuesta23: string;
  respuesta24: string;
  respuesta25: string;
  respuesta26: string;
  respuesta27: string;
  respuesta28: string;
  respuesta29: string;
  respuesta30: string;
  respuesta31: string;
  respuesta32: string;
  respuesta33: string;
  respuesta34: string;
  respuesta35: string;
  respuesta36: string;
  respuesta37: string;
  respuesta38: string;
  respuesta39: string;
  respuesta40: string;
  respuesta41: string;
  respuesta42: string;
  respuesta43: string;
  respuesta44: string;
  respuesta45: string;
  respuesta46: string;
  respuesta47: string;
  respuesta48: string;
  respuesta49: string;
  respuesta50: string;
  respuesta51: string;
  respuesta52: string;
  respuesta53: string;
  respuesta54: string;
  respuesta55: string;
  respuesta56: string;
  respuesta57: string;
  respuesta58: string;
  respuesta59: string;
  respuesta60: string;
  respuesta61: string;
  respuesta62: string;
  respuesta63: string;
  respuesta64: string;
  respuesta65: string;
  respuesta66: string;
  respuesta67: string;
  respuesta68: string;
  respuesta69: string;
  respuesta70: string;
  respuesta71: string;
  respuesta72: string;
  respuesta73: string;
  respuesta74: string;
  respuesta75: string;
  respuesta76: string;
  respuesta77: string;
  respuesta78: string;
  respuesta79: string;
  respuesta80: string;
  respuesta81: string;
  respuesta82: string;
  respuesta83: string;
  respuesta84: string;
  respuesta85: string;
  respuesta86: string;
  respuesta87: string;
  respuesta88: string;
  respuesta89: string;
  respuesta90: string;
  respuesta91: string;
  respuesta92: string;
  respuesta93: string;
  respuesta94: string;
  respuesta95: string;
  respuesta96: string;
  respuesta97: string;
  respuesta98: string;
  respuesta99: string;
  respuesta100: string;
  respuesta101: string;
  respuesta102: string;
  respuesta103: string;
  respuesta104: string;
  respuesta105: string;
  respuesta106: string;
  respuesta107: string;
  respuesta108: string;
  respuesta109: string;
  respuesta110: string;
  respuesta111: string;
  respuesta112: string;
  respuesta113: string;
  respuesta114: string;
  respuesta115: string;
  respuesta116: string;
  respuesta117: string;
  respuesta118: string;
  respuesta119: string;
  respuesta120: string;
  respuesta121: string;
  respuesta122: string;
  respuesta123: string;
  respuesta124: string;
  respuesta125: string;
  respuesta126: string;
  respuesta127: string;
  respuesta128: string;
  respuesta129: string;
  respuesta130: string;
  respuesta131: string;
  respuesta132: string;
  respuesta133: string;
  respuesta134: string;
  respuesta135: string;
  respuesta136: string;
  respuesta137: string;
  respuesta138: string;
  respuesta139: string;
  respuesta140: string;

  preguntas: string[];
  cantidadPreguntasI: number;
  nombre: string;

  constructor(private router: Router, private alerta: AlertController) {
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
  /*
  save() {
    //Extrallendo los datos 
    var data = new DatosPregunta();
    console.log(data.getCantidadPreguntasLocalHost());
    //Extraccion de la cantidad de preguntas
    this.cantidadPreguntasI = data.getCantidadPreguntasLocalHost();
    console.log('Cantidad de preguntas: ' + this.cantidadPreguntasI);
    if (this.cantidadPreguntasI == 1) {
      this.save1(); 
    } else if (this.cantidadPreguntasI == 2) {
      this.save2(); 
      console.log("save2")
    }*/

  /*else if (this.cantidadPreguntasI == 3) {
      this.save3(

      );
    } else if (this.cantidadPreguntasI == 4) {
      this.save4(

      );
    } else if (this.cantidadPreguntasI == 5) {
      this.save5(

      );
    } else if (this.cantidadPreguntasI == 2) {
      this.save6(
 
      );
    } else if (this.cantidadPreguntasI == 3) {
      this.save7(

      );
    } else if (this.cantidadPreguntasI == 4) {
      this.save8(

      );
    } else if (this.cantidadPreguntasI == 5) {
      this.save9(

      )
    }else if (this.cantidadPreguntasI == 4) {
      this.save10(

      );*/

  /*extraccionDataPreguntas(){
    var data = new EstiloPreguntas;
    data.setPregunta(this.pregunta1)
  }*/

  /*Validaciones
   *Que no se repitan las respuestas
   *Que no ponga como correcta un numero que no sea 1,2,3,4
   *No mandar espacios bacios
   */
  public async save1() {
    console.log('Guardado 1');
    /*Extrallendo los datos */
    var dataEnviar = new EstiloPreguntas();
    //asignacion de la pregunta
    dataEnviar.setPregunta1(this.pregunta1);
    console.log(dataEnviar.getPregunta1());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta1(this.respuesta1);
    dataEnviar.setRespuesta2(this.respuesta2);
    dataEnviar.setRespuesta3(this.respuesta3);
    dataEnviar.setRespuesta4(this.respuesta4);
    console.log(dataEnviar.getRespuesta1());
    console.log(dataEnviar.getRespuesta2());
    console.log(dataEnviar.getRespuesta3());
    console.log(dataEnviar.getRespuesta4());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta1(this.correcta1);
    console.log(dataEnviar.getCorrecta1());

    //°°°°°°°°°°°°°°°°°°°°°°°°°°|Validacion|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||
    //PRIMERA PREGUNTA
    //Validacion que indica que no se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() === undefined &&
      dataEnviar.getRespuesta1() === undefined &&
      dataEnviar.getRespuesta2() === undefined &&
      dataEnviar.getRespuesta3() === undefined &&
      dataEnviar.getRespuesta4() === undefined &&
      dataEnviar.getCorrecta1() === undefined
    ) {
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Pregunta 1:\nOlvidastes llenar algunos datos save2',
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

      console.log(
        'Pregunta 1:\nOlvidastes llenar algunos datos' +
          dataEnviar.getPregunta1() +
          dataEnviar.getRespuesta1() +
          dataEnviar.getRespuesta2() +
          dataEnviar.getRespuesta3() +
          dataEnviar.getRespuesta4() +
          dataEnviar.getCorrecta1()
      );
    }
    //Validacion que indica que se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() !== undefined &&
      dataEnviar.getRespuesta1() !== undefined &&
      dataEnviar.getRespuesta2() !== undefined &&
      dataEnviar.getRespuesta3() !== undefined &&
      dataEnviar.getRespuesta4() !== undefined &&
      dataEnviar.getCorrecta1() !== undefined
    ) {
      if (
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta2() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta3() === dataEnviar.getRespuesta4()
      ) {
        {
          const alert = await this.alerta.create({
            header: 'Info',
            message: 'Pregunta 1:\nHay varias respuestas iguales',
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

        console.log('Pregunta 1:\nHay varias respuestas iguales');
      } else if (
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta2() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta3() !== dataEnviar.getRespuesta4()
      ) {
        if (
          parseInt(dataEnviar.getCorrecta1()) <= 0 ||
          parseInt(dataEnviar.getCorrecta1()) >= 5
        ) {
          {
            const alert = await this.alerta.create({
              header: 'Info',
              message:
                'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
        }
        if (
          parseInt(dataEnviar.getCorrecta1()) >= 1 &&
          parseInt(dataEnviar.getCorrecta1()) <= 4
        ) {
          this.router.navigateByUrl('guia-completada');

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
          console.log(dataEnviar);
          console.log('Pregunta 1: Verificada');
        }

        console.log('Pregunta 1:\nNo hay campos repetidos');
      }

      console.log('Pregunta 1:\nCompletastes todos los campos');
    }
  }

  public async save2() {
    console.log('Guardado 2');
    /*Extrallendo los datos */
    var dataEnviar = new EstiloPreguntas();
    //asignacion de la pregunta
    dataEnviar.setPregunta1(this.pregunta1);
    console.log(dataEnviar.getPregunta1());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta1(this.respuesta1);
    dataEnviar.setRespuesta2(this.respuesta2);
    dataEnviar.setRespuesta3(this.respuesta3);
    dataEnviar.setRespuesta4(this.respuesta4);
    console.log(dataEnviar.getRespuesta1());
    console.log(dataEnviar.getRespuesta2());
    console.log(dataEnviar.getRespuesta3());
    console.log(dataEnviar.getRespuesta4());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta1(this.correcta1);
    console.log(dataEnviar.getCorrecta1());
    //2
    //asignacion de la pregunta
    dataEnviar.setPregunta2(this.pregunta2);
    console.log(dataEnviar.getPregunta2());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta5(this.respuesta5);
    dataEnviar.setRespuesta6(this.respuesta6);
    dataEnviar.setRespuesta7(this.respuesta7);
    dataEnviar.setRespuesta8(this.respuesta8);
    console.log(dataEnviar.getRespuesta5());
    console.log(dataEnviar.getRespuesta6());
    console.log(dataEnviar.getRespuesta7());
    console.log(dataEnviar.getRespuesta8());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta2(this.correcta2);
    console.log(dataEnviar.getCorrecta2());
    //°°°°°°°°°°°°°°°°°°°°°°°°°°|Validacion|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||
    //PRIMERA PREGUNTA
    //PRIMERA PREGUNTA
    //Validacion que indica que no se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() === undefined ||
      dataEnviar.getRespuesta1() === undefined ||
      dataEnviar.getRespuesta2() === undefined ||
      dataEnviar.getRespuesta3() === undefined ||
      dataEnviar.getRespuesta4() === undefined ||
      dataEnviar.getCorrecta1() === undefined
    ) {
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Pregunta 1:\nOlvidastes llenar algunos datos',
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

      console.log(
        'Pregunta 1:\nOlvidastes llenar algunos datos' +
          dataEnviar.getPregunta1() +
          dataEnviar.getRespuesta1() +
          dataEnviar.getRespuesta2() +
          dataEnviar.getRespuesta3() +
          dataEnviar.getRespuesta4() +
          dataEnviar.getCorrecta1()
      );
    }
    //Validacion que indica que se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() !== undefined &&
      dataEnviar.getRespuesta1() !== undefined &&
      dataEnviar.getRespuesta2() !== undefined &&
      dataEnviar.getRespuesta3() !== undefined &&
      dataEnviar.getRespuesta4() !== undefined &&
      dataEnviar.getCorrecta1() !== undefined
    ) {
      if (
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta2() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta3() === dataEnviar.getRespuesta5()
      ) {
        {
          const alert = await this.alerta.create({
            header: 'Info',
            message: 'Pregunta 1:\nHay varias respuestas iguales',
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

        console.log('Pregunta 1:\nHay varias respuestas iguales');
      } else if (
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta2() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta3() !== dataEnviar.getRespuesta5()
      ) {
        if (
          parseInt(dataEnviar.getCorrecta1()) <= 0 ||
          parseInt(dataEnviar.getCorrecta1()) >= 5
        ) {
          {
            const alert = await this.alerta.create({
              header: 'Info',
              message:
                'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
        }
        if (
          parseInt(dataEnviar.getCorrecta1()) >= 1 &&
          parseInt(dataEnviar.getCorrecta1()) <= 4
        ) {
          //SEGUNDA PREGUNTA
          //Validacion que indica que no se completo la primer pregunta
          if (
            dataEnviar.getPregunta2() === undefined ||
            dataEnviar.getRespuesta5() === undefined ||
            dataEnviar.getRespuesta6() === undefined ||
            dataEnviar.getRespuesta7() === undefined ||
            dataEnviar.getRespuesta8() === undefined ||
            dataEnviar.getCorrecta2() === undefined
          ) {
            {
              const alert = await this.alerta.create({
                header: 'Info',
                message: 'Pregunta 2:\nOlvidastes llenar algunos datos',
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

            console.log(
              'Pregunta 2:\nOlvidastes llenar algunos datos' +
                dataEnviar.getPregunta2() +
                dataEnviar.getRespuesta5() +
                dataEnviar.getRespuesta6() +
                dataEnviar.getRespuesta7() +
                dataEnviar.getRespuesta8() +
                dataEnviar.getCorrecta2()
            );
          }
          //Validacion que indica que se completo la segunda pregunta
          if (
            dataEnviar.getPregunta2() !== undefined &&
            dataEnviar.getRespuesta5() !== undefined &&
            dataEnviar.getRespuesta6() !== undefined &&
            dataEnviar.getRespuesta7() !== undefined &&
            dataEnviar.getRespuesta8() !== undefined &&
            dataEnviar.getCorrecta2() !== undefined
          ) {
            if (
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta6() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta7() === dataEnviar.getRespuesta8()
            ) {
              {
                const alert = await this.alerta.create({
                  header: 'Info',
                  message: 'Pregunta 2:\nHay varias respuestas iguales',
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

              console.log('Pregunta 2:\nHay varias respuestas iguales');
            } else if (
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta6() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta7() !== dataEnviar.getRespuesta8()
            ) {
              if (
                parseInt(dataEnviar.getCorrecta2()) < 1 ||
                parseInt(dataEnviar.getCorrecta2()) > 4
              ) {
                {
                  const alert = await this.alerta.create({
                    header: 'Info',
                    message:
                      'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
              } else if (
                parseInt(dataEnviar.getCorrecta2()) > 0 &&
                parseInt(dataEnviar.getCorrecta2()) < 5
              ) {
                this.router.navigateByUrl('guia-completada');

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
                console.log(dataEnviar);
                console.log('Pregunta 2: Verificada');
              }

              console.log('Pregunta 2:\nNo hay campos repetidos');
            }

            console.log('Pregunta 2:\nCompletastes todos los campos');
            //Fin de la pregunta 2
          }

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
          console.log(dataEnviar);
          console.log('Pregunta 1: Verificada');
        }

        console.log('Pregunta 1:\nNo hay campos repetidos');
      }

      console.log('Pregunta 1:\nCompletastes todos los campos');
    }
  }

  public async save3() {
    console.log('Guardado 3');
    /*Extrallendo los datos */
    var dataEnviar = new EstiloPreguntas();
    //asignacion de la pregunta
    dataEnviar.setPregunta1(this.pregunta1);
    console.log(dataEnviar.getPregunta1());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta1(this.respuesta1);
    dataEnviar.setRespuesta2(this.respuesta2);
    dataEnviar.setRespuesta3(this.respuesta3);
    dataEnviar.setRespuesta4(this.respuesta4);
    console.log(dataEnviar.getRespuesta1());
    console.log(dataEnviar.getRespuesta2());
    console.log(dataEnviar.getRespuesta3());
    console.log(dataEnviar.getRespuesta4());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta1(this.correcta1);
    console.log(dataEnviar.getCorrecta1());
    //2
    //asignacion de la pregunta
    dataEnviar.setPregunta2(this.pregunta2);
    console.log(dataEnviar.getPregunta2());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta5(this.respuesta5);
    dataEnviar.setRespuesta6(this.respuesta6);
    dataEnviar.setRespuesta7(this.respuesta7);
    dataEnviar.setRespuesta8(this.respuesta8);
    console.log(dataEnviar.getRespuesta5());
    console.log(dataEnviar.getRespuesta6());
    console.log(dataEnviar.getRespuesta7());
    console.log(dataEnviar.getRespuesta8());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta2(this.correcta2);
    console.log(dataEnviar.getCorrecta2());
    //3
    //asignacion de la pregunta
    dataEnviar.setPregunta3(this.pregunta3);
    console.log(dataEnviar.getPregunta3());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta9(this.respuesta9);
    dataEnviar.setRespuesta10(this.respuesta10);
    dataEnviar.setRespuesta11(this.respuesta11);
    dataEnviar.setRespuesta12(this.respuesta12);
    console.log(dataEnviar.getRespuesta9());
    console.log(dataEnviar.getRespuesta10());
    console.log(dataEnviar.getRespuesta11());
    console.log(dataEnviar.getRespuesta12());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta3(this.correcta3);
    console.log(dataEnviar.getCorrecta3());
    //°°°°°°°°°°°°°°°°°°°°°°°°°°|Validacion|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||
    //PRIMERA PREGUNTA
    //Validacion que indica que no se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() === undefined ||
      dataEnviar.getRespuesta1() === undefined ||
      dataEnviar.getRespuesta2() === undefined ||
      dataEnviar.getRespuesta3() === undefined ||
      dataEnviar.getRespuesta4() === undefined ||
      dataEnviar.getCorrecta1() === undefined
    ) {
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Pregunta 1:\nOlvidastes llenar algunos datos',
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

      console.log(
        'Pregunta 1:\nOlvidastes llenar algunos datos' +
          dataEnviar.getPregunta1() +
          dataEnviar.getRespuesta1() +
          dataEnviar.getRespuesta2() +
          dataEnviar.getRespuesta3() +
          dataEnviar.getRespuesta4() +
          dataEnviar.getCorrecta1()
      );
    }
    //Validacion que indica que se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() !== undefined &&
      dataEnviar.getRespuesta1() !== undefined &&
      dataEnviar.getRespuesta2() !== undefined &&
      dataEnviar.getRespuesta3() !== undefined &&
      dataEnviar.getRespuesta4() !== undefined &&
      dataEnviar.getCorrecta1() !== undefined
    ) {
      if (
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta2() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta3() === dataEnviar.getRespuesta5()
      ) {
        {
          const alert = await this.alerta.create({
            header: 'Info',
            message: 'Pregunta 1:\nHay varias respuestas iguales',
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

        console.log('Pregunta 1:\nHay varias respuestas iguales');
      } else if (
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta2() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta3() !== dataEnviar.getRespuesta5()
      ) {
        if (
          parseInt(dataEnviar.getCorrecta1()) <= 0 ||
          parseInt(dataEnviar.getCorrecta1()) >= 5
        ) {
          {
            const alert = await this.alerta.create({
              header: 'Info',
              message:
                'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
        }
        if (
          parseInt(dataEnviar.getCorrecta1()) >= 1 &&
          parseInt(dataEnviar.getCorrecta1()) <= 4
        ) {
          //SEGUNDA PREGUNTA
          //Validacion que indica que no se completo la segunda pregunta
          if (
            dataEnviar.getPregunta2() === undefined ||
            dataEnviar.getRespuesta5() === undefined ||
            dataEnviar.getRespuesta6() === undefined ||
            dataEnviar.getRespuesta7() === undefined ||
            dataEnviar.getRespuesta8() === undefined ||
            dataEnviar.getCorrecta2() === undefined
          ) {
            {
              const alert = await this.alerta.create({
                header: 'Info',
                message: 'Pregunta 2:\nOlvidastes llenar algunos datos',
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

            console.log(
              'Pregunta 2:\nOlvidastes llenar algunos datos' +
                dataEnviar.getPregunta2() +
                dataEnviar.getRespuesta5() +
                dataEnviar.getRespuesta6() +
                dataEnviar.getRespuesta7() +
                dataEnviar.getRespuesta8() +
                dataEnviar.getCorrecta2()
            );
          }
          //Validacion que indica que se completo la segunda pregunta
          if (
            dataEnviar.getPregunta2() !== undefined &&
            dataEnviar.getRespuesta5() !== undefined &&
            dataEnviar.getRespuesta6() !== undefined &&
            dataEnviar.getRespuesta7() !== undefined &&
            dataEnviar.getRespuesta8() !== undefined &&
            dataEnviar.getCorrecta2() !== undefined
          ) {
            if (
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta6() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta7() === dataEnviar.getRespuesta8()
            ) {
              {
                const alert = await this.alerta.create({
                  header: 'Info',
                  message: 'Pregunta 2:\nHay varias respuestas iguales',
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

              console.log('Pregunta 2:\nHay varias respuestas iguales');
            } else if (
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta6() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta7() !== dataEnviar.getRespuesta8()
            ) {
              if (
                parseInt(dataEnviar.getCorrecta2()) < 1 ||
                parseInt(dataEnviar.getCorrecta2()) > 4
              ) {
                {
                  const alert = await this.alerta.create({
                    header: 'Info',
                    message:
                      'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
              } else if (
                parseInt(dataEnviar.getCorrecta2()) > 0 &&
                parseInt(dataEnviar.getCorrecta2()) < 5
              ) {
                //TERCER PREGUNTA
                //Validacion que indica que no se completo la tercer pregunta
                if (
                  dataEnviar.getPregunta3() === undefined ||
                  dataEnviar.getRespuesta9() === undefined ||
                  dataEnviar.getRespuesta10() === undefined ||
                  dataEnviar.getRespuesta11() === undefined ||
                  dataEnviar.getRespuesta12() === undefined ||
                  dataEnviar.getCorrecta3() === undefined
                ) {
                  {
                    const alert = await this.alerta.create({
                      header: 'Info',
                      message: 'Pregunta 3:\nOlvidastes llenar algunos datos',
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

                  console.log(
                    'Pregunta 3:\nOlvidastes llenar algunos datos' +
                      dataEnviar.getPregunta3() +
                      dataEnviar.getRespuesta9() +
                      dataEnviar.getRespuesta10() +
                      dataEnviar.getRespuesta11() +
                      dataEnviar.getRespuesta12() +
                      dataEnviar.getCorrecta3()
                  );
                }
                //Validacion que indica que se completo la tercer pregunta
                if (
                  dataEnviar.getPregunta3() !== undefined &&
                  dataEnviar.getRespuesta9() !== undefined &&
                  dataEnviar.getRespuesta10() !== undefined &&
                  dataEnviar.getRespuesta11() !== undefined &&
                  dataEnviar.getRespuesta12() !== undefined &&
                  dataEnviar.getCorrecta3() !== undefined
                ) {
                  if (
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta10() ||
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta11() ||
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta12() ||
                    dataEnviar.getRespuesta10() ===
                      dataEnviar.getRespuesta11() ||
                    dataEnviar.getRespuesta10() ===
                      dataEnviar.getRespuesta12() ||
                    dataEnviar.getRespuesta11() === dataEnviar.getRespuesta12()
                  ) {
                    {
                      const alert = await this.alerta.create({
                        header: 'Info',
                        message: 'Pregunta 3:\nHay varias respuestas iguales',
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

                    console.log('Pregunta 3:\nHay varias respuestas iguales');
                  } else if (
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta10() &&
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta11() &&
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta12() &&
                    dataEnviar.getRespuesta10() !==
                      dataEnviar.getRespuesta11() &&
                    dataEnviar.getRespuesta10() !==
                      dataEnviar.getRespuesta12() &&
                    dataEnviar.getRespuesta11() !== dataEnviar.getRespuesta12()
                  ) {
                    if (
                      parseInt(dataEnviar.getCorrecta3()) < 1 ||
                      parseInt(dataEnviar.getCorrecta3()) > 4
                    ) {
                      {
                        const alert = await this.alerta.create({
                          header: 'Info',
                          message:
                            'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                      console.log(
                        'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                      );
                    } else if (
                      parseInt(dataEnviar.getCorrecta2()) > 0 &&
                      parseInt(dataEnviar.getCorrecta2()) < 5
                    ) {
                      this.router.navigateByUrl('guia-completada');

                      console.log(
                        'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                      );
                      console.log(dataEnviar);
                      console.log('Pregunta 2: Verificada');
                    }

                    console.log('Pregunta 3:\nNo hay campos repetidos');
                  }

                  console.log('Pregunta 3:\nCompletastes todos los campos');
                  //Fin de la pregunta 3
                }

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
                console.log(dataEnviar);
                console.log('Pregunta 2: Verificada');
              }

              console.log('Pregunta 2:\nNo hay campos repetidos');
            }

            console.log('Pregunta 2:\nCompletastes todos los campos');
            //Fin de la pregunta 2
          }

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
          console.log(dataEnviar);
          console.log('Pregunta 1: Verificada');
        }

        console.log('Pregunta 1:\nNo hay campos repetidos');
      }

      console.log('Pregunta 1:\nCompletastes todos los campos');
    }
  }

  public async save4() {
    console.log('Guardado 4');
    /*Extrallendo los datos */
    var dataEnviar = new EstiloPreguntas();
    //asignacion de la pregunta
    dataEnviar.setPregunta1(this.pregunta1);
    console.log(dataEnviar.getPregunta1());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta1(this.respuesta1);
    dataEnviar.setRespuesta2(this.respuesta2);
    dataEnviar.setRespuesta3(this.respuesta3);
    dataEnviar.setRespuesta4(this.respuesta4);
    console.log(dataEnviar.getRespuesta1());
    console.log(dataEnviar.getRespuesta2());
    console.log(dataEnviar.getRespuesta3());
    console.log(dataEnviar.getRespuesta4());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta1(this.correcta1);
    console.log(dataEnviar.getCorrecta1());
    //2
    //asignacion de la pregunta
    dataEnviar.setPregunta2(this.pregunta2);
    console.log(dataEnviar.getPregunta2());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta5(this.respuesta5);
    dataEnviar.setRespuesta6(this.respuesta6);
    dataEnviar.setRespuesta7(this.respuesta7);
    dataEnviar.setRespuesta8(this.respuesta8);
    console.log(dataEnviar.getRespuesta5());
    console.log(dataEnviar.getRespuesta6());
    console.log(dataEnviar.getRespuesta7());
    console.log(dataEnviar.getRespuesta8());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta2(this.correcta2);
    console.log(dataEnviar.getCorrecta2());
    //3
    //asignacion de la pregunta
    dataEnviar.setPregunta3(this.pregunta3);
    console.log(dataEnviar.getPregunta3());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta9(this.respuesta9);
    dataEnviar.setRespuesta10(this.respuesta10);
    dataEnviar.setRespuesta11(this.respuesta11);
    dataEnviar.setRespuesta12(this.respuesta12);
    console.log(dataEnviar.getRespuesta9());
    console.log(dataEnviar.getRespuesta10());
    console.log(dataEnviar.getRespuesta11());
    console.log(dataEnviar.getRespuesta12());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta3(this.correcta3);
    console.log(dataEnviar.getCorrecta3());
    //4
    //asignacion de la pregunta
    dataEnviar.setPregunta4(this.pregunta4);
    console.log(dataEnviar.getPregunta4());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta13(this.respuesta13);
    dataEnviar.setRespuesta14(this.respuesta14);
    dataEnviar.setRespuesta15(this.respuesta15);
    dataEnviar.setRespuesta16(this.respuesta16);
    console.log(dataEnviar.getRespuesta13());
    console.log(dataEnviar.getRespuesta14());
    console.log(dataEnviar.getRespuesta15());
    console.log(dataEnviar.getRespuesta16());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta4(this.correcta4);
    console.log(dataEnviar.getCorrecta4());
    //°°°°°°°°°°°°°°°°°°°°°°°°°°|Validacion|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||
    //PRIMERA PREGUNTA
    //Validacion que indica que no se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() === undefined ||
      dataEnviar.getRespuesta1() === undefined ||
      dataEnviar.getRespuesta2() === undefined ||
      dataEnviar.getRespuesta3() === undefined ||
      dataEnviar.getRespuesta4() === undefined ||
      dataEnviar.getCorrecta1() === undefined
    ) {
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Pregunta 1:\nOlvidastes llenar algunos datos',
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

      console.log(
        'Pregunta 1:\nOlvidastes llenar algunos datos' +
          dataEnviar.getPregunta1() +
          dataEnviar.getRespuesta1() +
          dataEnviar.getRespuesta2() +
          dataEnviar.getRespuesta3() +
          dataEnviar.getRespuesta4() +
          dataEnviar.getCorrecta1()
      );
    }
    //Validacion que indica que se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() !== undefined &&
      dataEnviar.getRespuesta1() !== undefined &&
      dataEnviar.getRespuesta2() !== undefined &&
      dataEnviar.getRespuesta3() !== undefined &&
      dataEnviar.getRespuesta4() !== undefined &&
      dataEnviar.getCorrecta1() !== undefined
    ) {
      if (
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta2() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta3() === dataEnviar.getRespuesta5()
      ) {
        {
          const alert = await this.alerta.create({
            header: 'Info',
            message: 'Pregunta 1:\nHay varias respuestas iguales',
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

        console.log('Pregunta 1:\nHay varias respuestas iguales');
      } else if (
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta2() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta3() !== dataEnviar.getRespuesta5()
      ) {
        if (
          parseInt(dataEnviar.getCorrecta1()) <= 0 ||
          parseInt(dataEnviar.getCorrecta1()) >= 5
        ) {
          {
            const alert = await this.alerta.create({
              header: 'Info',
              message:
                'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
        }
        if (
          parseInt(dataEnviar.getCorrecta1()) >= 1 &&
          parseInt(dataEnviar.getCorrecta1()) <= 4
        ) {
          //SEGUNDA PREGUNTA
          //Validacion que indica que no se completo la segunda pregunta
          if (
            dataEnviar.getPregunta2() === undefined ||
            dataEnviar.getRespuesta5() === undefined ||
            dataEnviar.getRespuesta6() === undefined ||
            dataEnviar.getRespuesta7() === undefined ||
            dataEnviar.getRespuesta8() === undefined ||
            dataEnviar.getCorrecta2() === undefined
          ) {
            {
              const alert = await this.alerta.create({
                header: 'Info',
                message: 'Pregunta 2:\nOlvidastes llenar algunos datos',
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

            console.log(
              'Pregunta 2:\nOlvidastes llenar algunos datos' +
                dataEnviar.getPregunta2() +
                dataEnviar.getRespuesta5() +
                dataEnviar.getRespuesta6() +
                dataEnviar.getRespuesta7() +
                dataEnviar.getRespuesta8() +
                dataEnviar.getCorrecta2()
            );
          }
          //Validacion que indica que se completo la segunda pregunta
          if (
            dataEnviar.getPregunta2() !== undefined &&
            dataEnviar.getRespuesta5() !== undefined &&
            dataEnviar.getRespuesta6() !== undefined &&
            dataEnviar.getRespuesta7() !== undefined &&
            dataEnviar.getRespuesta8() !== undefined &&
            dataEnviar.getCorrecta2() !== undefined
          ) {
            if (
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta6() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta7() === dataEnviar.getRespuesta8()
            ) {
              {
                const alert = await this.alerta.create({
                  header: 'Info',
                  message: 'Pregunta 2:\nHay varias respuestas iguales',
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

              console.log('Pregunta 2:\nHay varias respuestas iguales');
            } else if (
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta6() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta7() !== dataEnviar.getRespuesta8()
            ) {
              if (
                parseInt(dataEnviar.getCorrecta2()) < 1 ||
                parseInt(dataEnviar.getCorrecta2()) > 4
              ) {
                {
                  const alert = await this.alerta.create({
                    header: 'Info',
                    message:
                      'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
              } else if (
                parseInt(dataEnviar.getCorrecta2()) > 0 &&
                parseInt(dataEnviar.getCorrecta2()) < 5
              ) {
                //TERCER PREGUNTA
                //Validacion que indica que no se completo la tercer pregunta
                if (
                  dataEnviar.getPregunta3() === undefined ||
                  dataEnviar.getRespuesta9() === undefined ||
                  dataEnviar.getRespuesta10() === undefined ||
                  dataEnviar.getRespuesta11() === undefined ||
                  dataEnviar.getRespuesta12() === undefined ||
                  dataEnviar.getCorrecta3() === undefined
                ) {
                  {
                    const alert = await this.alerta.create({
                      header: 'Info',
                      message: 'Pregunta 3:\nOlvidastes llenar algunos datos',
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

                  console.log(
                    'Pregunta 3:\nOlvidastes llenar algunos datos' +
                      dataEnviar.getPregunta3() +
                      dataEnviar.getRespuesta9() +
                      dataEnviar.getRespuesta10() +
                      dataEnviar.getRespuesta11() +
                      dataEnviar.getRespuesta12() +
                      dataEnviar.getCorrecta3()
                  );
                }
                //Validacion que indica que se completo la tercer pregunta
                if (
                  dataEnviar.getPregunta3() !== undefined &&
                  dataEnviar.getRespuesta9() !== undefined &&
                  dataEnviar.getRespuesta10() !== undefined &&
                  dataEnviar.getRespuesta11() !== undefined &&
                  dataEnviar.getRespuesta12() !== undefined &&
                  dataEnviar.getCorrecta3() !== undefined
                ) {
                  if (
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta10() ||
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta11() ||
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta12() ||
                    dataEnviar.getRespuesta10() ===
                      dataEnviar.getRespuesta11() ||
                    dataEnviar.getRespuesta10() ===
                      dataEnviar.getRespuesta12() ||
                    dataEnviar.getRespuesta11() === dataEnviar.getRespuesta12()
                  ) {
                    {
                      const alert = await this.alerta.create({
                        header: 'Info',
                        message: 'Pregunta 3:\nHay varias respuestas iguales',
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

                    console.log('Pregunta 3:\nHay varias respuestas iguales');
                  } else if (
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta10() &&
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta11() &&
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta12() &&
                    dataEnviar.getRespuesta10() !==
                      dataEnviar.getRespuesta11() &&
                    dataEnviar.getRespuesta10() !==
                      dataEnviar.getRespuesta12() &&
                    dataEnviar.getRespuesta11() !== dataEnviar.getRespuesta12()
                  ) {
                    if (
                      parseInt(dataEnviar.getCorrecta3()) < 1 ||
                      parseInt(dataEnviar.getCorrecta3()) > 4
                    ) {
                      {
                        const alert = await this.alerta.create({
                          header: 'Info',
                          message:
                            'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                      console.log(
                        'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                      );
                    } else if (
                      parseInt(dataEnviar.getCorrecta3()) > 0 &&
                      parseInt(dataEnviar.getCorrecta3()) < 5
                    ) {
                      //CUARTA PREGUNTA
                      //Validacion que indica que no se completo la tercer pregunta
                      if (
                        dataEnviar.getPregunta4() === undefined ||
                        dataEnviar.getRespuesta13() === undefined ||
                        dataEnviar.getRespuesta14() === undefined ||
                        dataEnviar.getRespuesta15() === undefined ||
                        dataEnviar.getRespuesta16() === undefined ||
                        dataEnviar.getCorrecta4() === undefined
                      ) {
                        {
                          const alert = await this.alerta.create({
                            header: 'Info',
                            message:
                              'Pregunta 4:\nOlvidastes llenar algunos datos',
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

                        console.log(
                          'Pregunta 4:\nOlvidastes llenar algunos datos' +
                            dataEnviar.getPregunta4() +
                            dataEnviar.getRespuesta13() +
                            dataEnviar.getRespuesta14() +
                            dataEnviar.getRespuesta15() +
                            dataEnviar.getRespuesta16() +
                            dataEnviar.getCorrecta4()
                        );
                      }
                      //Validacion que indica que se completo la tercer pregunta
                      if (
                        dataEnviar.getPregunta4() !== undefined &&
                        dataEnviar.getRespuesta13() !== undefined &&
                        dataEnviar.getRespuesta14() !== undefined &&
                        dataEnviar.getRespuesta15() !== undefined &&
                        dataEnviar.getRespuesta16() !== undefined &&
                        dataEnviar.getCorrecta4() !== undefined
                      ) {
                        if (
                          dataEnviar.getRespuesta13() ===
                            dataEnviar.getRespuesta14() ||
                          dataEnviar.getRespuesta13() ===
                            dataEnviar.getRespuesta15() ||
                          dataEnviar.getRespuesta13() ===
                            dataEnviar.getRespuesta16() ||
                          dataEnviar.getRespuesta14() ===
                            dataEnviar.getRespuesta15() ||
                          dataEnviar.getRespuesta14() ===
                            dataEnviar.getRespuesta16() ||
                          dataEnviar.getRespuesta15() ===
                            dataEnviar.getRespuesta16()
                        ) {
                          {
                            const alert = await this.alerta.create({
                              header: 'Info',
                              message:
                                'Pregunta 4:\nHay varias respuestas iguales',
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

                          console.log(
                            'Pregunta 4:\nHay varias respuestas iguales'
                          );
                        } else if (
                          dataEnviar.getRespuesta13() !==
                            dataEnviar.getRespuesta14() &&
                          dataEnviar.getRespuesta13() !==
                            dataEnviar.getRespuesta15() &&
                          dataEnviar.getRespuesta13() !==
                            dataEnviar.getRespuesta16() &&
                          dataEnviar.getRespuesta14() !==
                            dataEnviar.getRespuesta15() &&
                          dataEnviar.getRespuesta14() !==
                            dataEnviar.getRespuesta16() &&
                          dataEnviar.getRespuesta15() !==
                            dataEnviar.getRespuesta16()
                        ) {
                          if (
                            parseInt(dataEnviar.getCorrecta4()) < 1 ||
                            parseInt(dataEnviar.getCorrecta4()) > 4
                          ) {
                            {
                              const alert = await this.alerta.create({
                                header: 'Info',
                                message:
                                  'Pregunta 4:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                            console.log(
                              'Pregunta 4:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                            );
                          } else if (
                            parseInt(dataEnviar.getCorrecta4()) > 0 &&
                            parseInt(dataEnviar.getCorrecta4()) < 5
                          ) {
                            this.router.navigateByUrl('guia-completada');

                            console.log(
                              'Pregunta 4:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                            );
                            console.log(dataEnviar);
                            console.log('Pregunta 4: Verificada');
                          }

                          console.log('Pregunta 4:\nNo hay campos repetidos');
                        }

                        console.log(
                          'Pregunta 4:\nCompletastes todos los campos'
                        );
                        //Fin de la pregunta 4
                      }

                      console.log(
                        'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                      );
                      console.log(dataEnviar);
                      console.log('Pregunta 2: Verificada');
                    }

                    console.log('Pregunta 3:\nNo hay campos repetidos');
                  }

                  console.log('Pregunta 3:\nCompletastes todos los campos');
                  //Fin de la pregunta 3
                }

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
                console.log(dataEnviar);
                console.log('Pregunta 2: Verificada');
              }

              console.log('Pregunta 2:\nNo hay campos repetidos');
            }

            console.log('Pregunta 2:\nCompletastes todos los campos');
            //Fin de la pregunta 2
          }

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
          console.log(dataEnviar);
          console.log('Pregunta 1: Verificada');
        }

        console.log('Pregunta 1:\nNo hay campos repetidos');
      }

      console.log('Pregunta 1:\nCompletastes todos los campos');
    }
  }


  public async save5() {
    console.log('Guardado 5');
    /*Extrallendo los datos */
    var dataEnviar = new EstiloPreguntas();
    //asignacion de la pregunta
    dataEnviar.setPregunta1(this.pregunta1);
    console.log(dataEnviar.getPregunta1());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta1(this.respuesta1);
    dataEnviar.setRespuesta2(this.respuesta2);
    dataEnviar.setRespuesta3(this.respuesta3);
    dataEnviar.setRespuesta4(this.respuesta4);
    console.log(dataEnviar.getRespuesta1());
    console.log(dataEnviar.getRespuesta2());
    console.log(dataEnviar.getRespuesta3());
    console.log(dataEnviar.getRespuesta4());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta1(this.correcta1);
    console.log(dataEnviar.getCorrecta1());
    //2
    //asignacion de la pregunta
    dataEnviar.setPregunta2(this.pregunta2);
    console.log(dataEnviar.getPregunta2());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta5(this.respuesta5);
    dataEnviar.setRespuesta6(this.respuesta6);
    dataEnviar.setRespuesta7(this.respuesta7);
    dataEnviar.setRespuesta8(this.respuesta8);
    console.log(dataEnviar.getRespuesta5());
    console.log(dataEnviar.getRespuesta6());
    console.log(dataEnviar.getRespuesta7());
    console.log(dataEnviar.getRespuesta8());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta2(this.correcta2);
    console.log(dataEnviar.getCorrecta2());
    //3
    //asignacion de la pregunta
    dataEnviar.setPregunta3(this.pregunta3);
    console.log(dataEnviar.getPregunta3());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta9(this.respuesta9);
    dataEnviar.setRespuesta10(this.respuesta10);
    dataEnviar.setRespuesta11(this.respuesta11);
    dataEnviar.setRespuesta12(this.respuesta12);
    console.log(dataEnviar.getRespuesta9());
    console.log(dataEnviar.getRespuesta10());
    console.log(dataEnviar.getRespuesta11());
    console.log(dataEnviar.getRespuesta12());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta3(this.correcta3);
    console.log(dataEnviar.getCorrecta3());
    //4
    //asignacion de la pregunta
    dataEnviar.setPregunta4(this.pregunta4);
    console.log(dataEnviar.getPregunta4());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta13(this.respuesta13);
    dataEnviar.setRespuesta14(this.respuesta14);
    dataEnviar.setRespuesta15(this.respuesta15);
    dataEnviar.setRespuesta16(this.respuesta16);
    console.log(dataEnviar.getRespuesta13());
    console.log(dataEnviar.getRespuesta14());
    console.log(dataEnviar.getRespuesta15());
    console.log(dataEnviar.getRespuesta16());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta4(this.correcta4);
    console.log(dataEnviar.getCorrecta4());
    //5
    //asignacion de la pregunta
    dataEnviar.setPregunta5(this.pregunta5);
    console.log(dataEnviar.getPregunta5());
    //asignacion de las 4respuestas
    dataEnviar.setRespuesta17(this.respuesta17);
    dataEnviar.setRespuesta18(this.respuesta18);
    dataEnviar.setRespuesta19(this.respuesta19);
    dataEnviar.setRespuesta20(this.respuesta20);
    console.log(dataEnviar.getRespuesta17());
    console.log(dataEnviar.getRespuesta18());
    console.log(dataEnviar.getRespuesta19());
    console.log(dataEnviar.getRespuesta20());
    //asignacion de la respuesta correcta
    dataEnviar.setCorrecta5(this.correcta5);
    console.log(dataEnviar.getCorrecta5());
    //°°°°°°°°°°°°°°°°°°°°°°°°°°|Validacion|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||
    //PRIMERA PREGUNTA
    //Validacion que indica que no se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() === undefined ||
      dataEnviar.getRespuesta1() === undefined ||
      dataEnviar.getRespuesta2() === undefined ||
      dataEnviar.getRespuesta3() === undefined ||
      dataEnviar.getRespuesta4() === undefined ||
      dataEnviar.getCorrecta1() === undefined
    ) {
      {
        const alert = await this.alerta.create({
          header: 'Info',
          message: 'Pregunta 1:\nOlvidastes llenar algunos datos',
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

      console.log(
        'Pregunta 1:\nOlvidastes llenar algunos datos' +
          dataEnviar.getPregunta1() +
          dataEnviar.getRespuesta1() +
          dataEnviar.getRespuesta2() +
          dataEnviar.getRespuesta3() +
          dataEnviar.getRespuesta4() +
          dataEnviar.getCorrecta1()
      );
    }
    //Validacion que indica que se completo la primer pregunta
    if (
      dataEnviar.getPregunta1() !== undefined &&
      dataEnviar.getRespuesta1() !== undefined &&
      dataEnviar.getRespuesta2() !== undefined &&
      dataEnviar.getRespuesta3() !== undefined &&
      dataEnviar.getRespuesta4() !== undefined &&
      dataEnviar.getCorrecta1() !== undefined
    ) {
      if (
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta2() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta1() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta3() ||
        dataEnviar.getRespuesta2() === dataEnviar.getRespuesta4() ||
        dataEnviar.getRespuesta3() === dataEnviar.getRespuesta5()
      ) {
        {
          const alert = await this.alerta.create({
            header: 'Info',
            message: 'Pregunta 1:\nHay varias respuestas iguales',
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

        console.log('Pregunta 1:\nHay varias respuestas iguales');
      } else if (
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta2() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta1() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta3() &&
        dataEnviar.getRespuesta2() !== dataEnviar.getRespuesta4() &&
        dataEnviar.getRespuesta3() !== dataEnviar.getRespuesta5()
      ) {
        if (
          parseInt(dataEnviar.getCorrecta1()) <= 0 ||
          parseInt(dataEnviar.getCorrecta1()) >= 5
        ) {
          {
            const alert = await this.alerta.create({
              header: 'Info',
              message:
                'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
        }
        if (
          parseInt(dataEnviar.getCorrecta1()) >= 1 &&
          parseInt(dataEnviar.getCorrecta1()) <= 4
        ) {
          //SEGUNDA PREGUNTA
          //Validacion que indica que no se completo la segunda pregunta
          if (
            dataEnviar.getPregunta2() === undefined ||
            dataEnviar.getRespuesta5() === undefined ||
            dataEnviar.getRespuesta6() === undefined ||
            dataEnviar.getRespuesta7() === undefined ||
            dataEnviar.getRespuesta8() === undefined ||
            dataEnviar.getCorrecta2() === undefined
          ) {
            {
              const alert = await this.alerta.create({
                header: 'Info',
                message: 'Pregunta 2:\nOlvidastes llenar algunos datos',
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

            console.log(
              'Pregunta 2:\nOlvidastes llenar algunos datos' +
                dataEnviar.getPregunta2() +
                dataEnviar.getRespuesta5() +
                dataEnviar.getRespuesta6() +
                dataEnviar.getRespuesta7() +
                dataEnviar.getRespuesta8() +
                dataEnviar.getCorrecta2()
            );
          }
          //Validacion que indica que se completo la segunda pregunta
          if (
            dataEnviar.getPregunta2() !== undefined &&
            dataEnviar.getRespuesta5() !== undefined &&
            dataEnviar.getRespuesta6() !== undefined &&
            dataEnviar.getRespuesta7() !== undefined &&
            dataEnviar.getRespuesta8() !== undefined &&
            dataEnviar.getCorrecta2() !== undefined
          ) {
            if (
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta6() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta5() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta7() ||
              dataEnviar.getRespuesta6() === dataEnviar.getRespuesta8() ||
              dataEnviar.getRespuesta7() === dataEnviar.getRespuesta8()
            ) {
              {
                const alert = await this.alerta.create({
                  header: 'Info',
                  message: 'Pregunta 2:\nHay varias respuestas iguales',
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

              console.log('Pregunta 2:\nHay varias respuestas iguales');
            } else if (
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta6() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta5() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta7() &&
              dataEnviar.getRespuesta6() !== dataEnviar.getRespuesta8() &&
              dataEnviar.getRespuesta7() !== dataEnviar.getRespuesta8()
            ) {
              if (
                parseInt(dataEnviar.getCorrecta2()) < 1 ||
                parseInt(dataEnviar.getCorrecta2()) > 4
              ) {
                {
                  const alert = await this.alerta.create({
                    header: 'Info',
                    message:
                      'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
              } else if (
                parseInt(dataEnviar.getCorrecta2()) > 0 &&
                parseInt(dataEnviar.getCorrecta2()) < 5
              ) {
                //TERCER PREGUNTA
                //Validacion que indica que no se completo la tercer pregunta
                if (
                  dataEnviar.getPregunta3() === undefined ||
                  dataEnviar.getRespuesta9() === undefined ||
                  dataEnviar.getRespuesta10() === undefined ||
                  dataEnviar.getRespuesta11() === undefined ||
                  dataEnviar.getRespuesta12() === undefined ||
                  dataEnviar.getCorrecta3() === undefined
                ) {
                  {
                    const alert = await this.alerta.create({
                      header: 'Info',
                      message: 'Pregunta 3:\nOlvidastes llenar algunos datos',
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

                  console.log(
                    'Pregunta 3:\nOlvidastes llenar algunos datos' +
                      dataEnviar.getPregunta3() +
                      dataEnviar.getRespuesta9() +
                      dataEnviar.getRespuesta10() +
                      dataEnviar.getRespuesta11() +
                      dataEnviar.getRespuesta12() +
                      dataEnviar.getCorrecta3()
                  );
                }
                //Validacion que indica que se completo la tercer pregunta
                if (
                  dataEnviar.getPregunta3() !== undefined &&
                  dataEnviar.getRespuesta9() !== undefined &&
                  dataEnviar.getRespuesta10() !== undefined &&
                  dataEnviar.getRespuesta11() !== undefined &&
                  dataEnviar.getRespuesta12() !== undefined &&
                  dataEnviar.getCorrecta3() !== undefined
                ) {
                  if (
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta10() ||
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta11() ||
                    dataEnviar.getRespuesta9() ===
                      dataEnviar.getRespuesta12() ||
                    dataEnviar.getRespuesta10() ===
                      dataEnviar.getRespuesta11() ||
                    dataEnviar.getRespuesta10() ===
                      dataEnviar.getRespuesta12() ||
                    dataEnviar.getRespuesta11() === dataEnviar.getRespuesta12()
                  ) {
                    {
                      const alert = await this.alerta.create({
                        header: 'Info',
                        message: 'Pregunta 3:\nHay varias respuestas iguales',
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

                    console.log('Pregunta 3:\nHay varias respuestas iguales');
                  } else if (
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta10() &&
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta11() &&
                    dataEnviar.getRespuesta9() !==
                      dataEnviar.getRespuesta12() &&
                    dataEnviar.getRespuesta10() !==
                      dataEnviar.getRespuesta11() &&
                    dataEnviar.getRespuesta10() !==
                      dataEnviar.getRespuesta12() &&
                    dataEnviar.getRespuesta11() !== dataEnviar.getRespuesta12()
                  ) {
                    if (
                      parseInt(dataEnviar.getCorrecta3()) < 1 ||
                      parseInt(dataEnviar.getCorrecta3()) > 4
                    ) {
                      {
                        const alert = await this.alerta.create({
                          header: 'Info',
                          message:
                            'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                      console.log(
                        'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                      );
                    } else if (
                      parseInt(dataEnviar.getCorrecta3()) > 0 &&
                      parseInt(dataEnviar.getCorrecta3()) < 5
                    ) {
                      //CUARTA PREGUNTA
                      //Validacion que indica que no se completo la tercer pregunta
                      if (
                        dataEnviar.getPregunta4() === undefined ||
                        dataEnviar.getRespuesta13() === undefined ||
                        dataEnviar.getRespuesta14() === undefined ||
                        dataEnviar.getRespuesta15() === undefined ||
                        dataEnviar.getRespuesta16() === undefined ||
                        dataEnviar.getCorrecta4() === undefined
                      ) {
                        {
                          const alert = await this.alerta.create({
                            header: 'Info',
                            message:
                              'Pregunta 4:\nOlvidastes llenar algunos datos',
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

                        console.log(
                          'Pregunta 4:\nOlvidastes llenar algunos datos' +
                            dataEnviar.getPregunta4() +
                            dataEnviar.getRespuesta13() +
                            dataEnviar.getRespuesta14() +
                            dataEnviar.getRespuesta15() +
                            dataEnviar.getRespuesta16() +
                            dataEnviar.getCorrecta4()
                        );
                      }
                      //Validacion que indica que se completo la tercer pregunta
                      if (
                        dataEnviar.getPregunta4() !== undefined &&
                        dataEnviar.getRespuesta13() !== undefined &&
                        dataEnviar.getRespuesta14() !== undefined &&
                        dataEnviar.getRespuesta15() !== undefined &&
                        dataEnviar.getRespuesta16() !== undefined &&
                        dataEnviar.getCorrecta4() !== undefined
                      ) {
                        if (
                          dataEnviar.getRespuesta13() ===
                            dataEnviar.getRespuesta14() ||
                          dataEnviar.getRespuesta13() ===
                            dataEnviar.getRespuesta15() ||
                          dataEnviar.getRespuesta13() ===
                            dataEnviar.getRespuesta16() ||
                          dataEnviar.getRespuesta14() ===
                            dataEnviar.getRespuesta15() ||
                          dataEnviar.getRespuesta14() ===
                            dataEnviar.getRespuesta16() ||
                          dataEnviar.getRespuesta15() ===
                            dataEnviar.getRespuesta16()
                        ) {
                          {
                            const alert = await this.alerta.create({
                              header: 'Info',
                              message:
                                'Pregunta 4:\nHay varias respuestas iguales',
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

                          console.log(
                            'Pregunta 4:\nHay varias respuestas iguales'
                          );
                        } else if (
                          dataEnviar.getRespuesta13() !==
                            dataEnviar.getRespuesta14() &&
                          dataEnviar.getRespuesta13() !==
                            dataEnviar.getRespuesta15() &&
                          dataEnviar.getRespuesta13() !==
                            dataEnviar.getRespuesta16() &&
                          dataEnviar.getRespuesta14() !==
                            dataEnviar.getRespuesta15() &&
                          dataEnviar.getRespuesta14() !==
                            dataEnviar.getRespuesta16() &&
                          dataEnviar.getRespuesta15() !==
                            dataEnviar.getRespuesta16()
                        ) {
                          if (
                            parseInt(dataEnviar.getCorrecta4()) < 1 ||
                            parseInt(dataEnviar.getCorrecta4()) > 4
                          ) {
                            {
                              const alert = await this.alerta.create({
                                header: 'Info',
                                message:
                                  'Pregunta 4:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                            console.log(
                              'Pregunta 4:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                            );
                          } else if (
                            parseInt(dataEnviar.getCorrecta4()) > 0 &&
                            parseInt(dataEnviar.getCorrecta4()) < 5
                          ) {
                            //QUINTATA PREGUNTA
                      //Validacion que indica que no se completo la tercer pregunta
                      if (
                        dataEnviar.getPregunta5() === undefined ||
                        dataEnviar.getRespuesta17() === undefined ||
                        dataEnviar.getRespuesta18() === undefined ||
                        dataEnviar.getRespuesta19() === undefined ||
                        dataEnviar.getRespuesta20() === undefined ||
                        dataEnviar.getCorrecta5() === undefined
                      ) {
                        {
                          const alert = await this.alerta.create({
                            header: 'Info',
                            message:
                              'Pregunta 5:\nOlvidastes llenar algunos datos',
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

                        console.log(
                          'Pregunta 5:\nOlvidastes llenar algunos datos' +
                            dataEnviar.getPregunta5() +
                            dataEnviar.getRespuesta17() +
                            dataEnviar.getRespuesta18() +
                            dataEnviar.getRespuesta19() +
                            dataEnviar.getRespuesta20() +
                            dataEnviar.getCorrecta5()
                        );
                      }
                      //Validacion que indica que se completo la tercer pregunta
                      if (
                        dataEnviar.getPregunta5() !== undefined &&
                        dataEnviar.getRespuesta17() !== undefined &&
                        dataEnviar.getRespuesta18() !== undefined &&
                        dataEnviar.getRespuesta19() !== undefined &&
                        dataEnviar.getRespuesta20() !== undefined &&
                        dataEnviar.getCorrecta5() !== undefined
                      ) {
                        if (
                          dataEnviar.getRespuesta17() ===
                            dataEnviar.getRespuesta18() ||
                          dataEnviar.getRespuesta17() ===
                            dataEnviar.getRespuesta19() ||
                          dataEnviar.getRespuesta17() ===
                            dataEnviar.getRespuesta20() ||
                          dataEnviar.getRespuesta18() ===
                            dataEnviar.getRespuesta19() ||
                          dataEnviar.getRespuesta18() ===
                            dataEnviar.getRespuesta20() ||
                          dataEnviar.getRespuesta19() ===
                            dataEnviar.getRespuesta20()
                        ) {
                          {
                            const alert = await this.alerta.create({
                              header: 'Info',
                              message:
                                'Pregunta 5:\nHay varias respuestas iguales',
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

                          console.log(
                            'Pregunta 5:\nHay varias respuestas iguales'
                          );
                        } else if (
                          dataEnviar.getRespuesta17() !==
                            dataEnviar.getRespuesta18() &&
                          dataEnviar.getRespuesta17() !==
                            dataEnviar.getRespuesta19() &&
                          dataEnviar.getRespuesta17() !==
                            dataEnviar.getRespuesta20() &&
                          dataEnviar.getRespuesta18() !==
                            dataEnviar.getRespuesta19() &&
                          dataEnviar.getRespuesta18() !==
                            dataEnviar.getRespuesta20() &&
                          dataEnviar.getRespuesta19() !==
                            dataEnviar.getRespuesta20()
                        ) {
                          if (
                            parseInt(dataEnviar.getCorrecta5()) < 1 ||
                            parseInt(dataEnviar.getCorrecta5()) > 4
                          ) {
                            {
                              const alert = await this.alerta.create({
                                header: 'Info',
                                message:
                                  'Pregunta 5:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con un numero',
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

                            console.log(
                              'Pregunta 5:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                            );
                          } else if (
                            parseInt(dataEnviar.getCorrecta5()) > 0 &&
                            parseInt(dataEnviar.getCorrecta5()) < 5
                          ) {
                            this.router.navigateByUrl('guia-completada');

                            console.log(
                              'Pregunta 5:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                            );
                            console.log(dataEnviar);
                            console.log('Pregunta 5: Verificada');
                          }

                          console.log('Pregunta 5:\nNo hay campos repetidos');
                        }

                        console.log(
                          'Pregunta 5:\nCompletastes todos los campos'
                        );
                        //Fin de la pregunta 5
                      }

                            console.log(
                              'Pregunta 4:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                            );
                            console.log(dataEnviar);
                            console.log('Pregunta 4: Verificada');
                          }

                          console.log('Pregunta 4:\nNo hay campos repetidos');
                        }

                        console.log(
                          'Pregunta 4:\nCompletastes todos los campos'
                        );
                        //Fin de la pregunta 4
                      }

                      console.log(
                        'Pregunta 3:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                      );
                      console.log(dataEnviar);
                      console.log('Pregunta 2: Verificada');
                    }

                    console.log('Pregunta 3:\nNo hay campos repetidos');
                  }

                  console.log('Pregunta 3:\nCompletastes todos los campos');
                  //Fin de la pregunta 3
                }

                console.log(
                  'Pregunta 2:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
                );
                console.log(dataEnviar);
                console.log('Pregunta 2: Verificada');
              }

              console.log('Pregunta 2:\nNo hay campos repetidos');
            }

            console.log('Pregunta 2:\nCompletastes todos los campos');
            //Fin de la pregunta 2
          }

          console.log(
            'Pregunta 1:\nLa respuesta que colocaste como correcta no existe, recuerda colocarla con numero'
          );
          console.log(dataEnviar);
          console.log('Pregunta 1: Verificada');
        }

        console.log('Pregunta 1:\nNo hay campos repetidos');
      }

      console.log('Pregunta 1:\nCompletastes todos los campos');
    }
  }

}

/*
 */
