import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BorradorRespuestas } from 'src/app/models/borrador-respuestas';
import { DatosPregunta } from 'src/app/models/datos-pregunta';
import { EstiloPreguntas } from 'src/app/models/estilo-preguntas';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.page.html',
  styleUrls: ['./simulador.page.scss'],
})
export class SimuladorPage implements OnInit {
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

  eleccion1: string;
  eleccion2: string;
  eleccion3: string;
  eleccion4: string;
  eleccion5: string;
  eleccion6: string;
  eleccion7: string;
  eleccion8: string;
  eleccion9: string;
  eleccion10: string;
  eleccion11: string;
  eleccion12: string;
  eleccion13: string;
  eleccion14: string;
  eleccion15: string;
  eleccion16: string;
  eleccion17: string;
  eleccion18: string;
  eleccion19: string;
  eleccion20: string;
  eleccion21: string;
  eleccion22: string;
  eleccion23: string;
  eleccion24: string;
  eleccion25: string;
  eleccion26: string;
  eleccion27: string;
  eleccion28: string;
  eleccion29: string;
  eleccion30: string;
  eleccion31: string;
  eleccion32: string;
  eleccion33: string;
  eleccion34: string;
  eleccion35: string;
  eleccion36: string;
  eleccion37: string;
  eleccion38: string;
  eleccion39: string;
  eleccion40: string;

  eleccionTexto1: string;
  eleccionTexto2: string;
  eleccionTexto3: string;
  eleccionTexto4: string;
  eleccionTexto5: string;
  eleccionTexto6: string;
  eleccionTexto7: string;
  eleccionTexto8: string;
  eleccionTexto9: string;
  eleccionTexto10: string;
  eleccionTexto11: string;
  eleccionTexto12: string;
  eleccionTexto13: string;
  eleccionTexto14: string;
  eleccionTexto15: string;
  eleccionTexto16: string;
  eleccionTexto17: string;
  eleccionTexto18: string;
  eleccionTexto19: string;
  eleccionTexto20: string;
  eleccionTexto21: string;
  eleccionTexto22: string;
  eleccionTexto23: string;
  eleccionTexto24: string;
  eleccionTexto25: string;
  eleccionTexto26: string;
  eleccionTexto27: string;
  eleccionTexto28: string;
  eleccionTexto29: string;
  eleccionTexto30: string;
  eleccionTexto31: string;
  eleccionTexto32: string;
  eleccionTexto33: string;
  eleccionTexto34: string;
  eleccionTexto35: string;
  eleccionTexto36: string;
  eleccionTexto37: string;
  eleccionTexto38: string;
  eleccionTexto39: string;
  eleccionTexto40: string;

  cantidadPreguntasI: number;
  nombre: string;
  constructor(private router: Router, private alerta: AlertController) {
    /*Extrallendo los datos */
    var data = new DatosPregunta();
    console.log(data);
    //Extraccion de la cantidad de preguntas
    this.cantidadPreguntasI = data.getCantidadPreguntasLocalHost();
    console.log('Cantidad de preguntas: ' + this.cantidadPreguntasI);
    //Extraccion del nombre
    this.nombre = data.getNombreLocalHost();
    console.log('Nombre: ' + this.nombre);
    if (this.cantidadPreguntasI == 1) {
      this.preguntaElegida1();
    } else if (this.cantidadPreguntasI == 2) {
      this.preguntaElegida1();
      this.preguntaElegida2();
    } else if (this.cantidadPreguntasI == 3) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
    } else if (this.cantidadPreguntasI == 4) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
      this.preguntaElegida4();
    } else if (this.cantidadPreguntasI == 5) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
      this.preguntaElegida4();
      this.preguntaElegida5();
    }else if (this.cantidadPreguntasI == 6) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
      this.preguntaElegida4();
      this.preguntaElegida5();
      this.preguntaElegida6();
    }else if (this.cantidadPreguntasI == 7) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
      this.preguntaElegida4();
      this.preguntaElegida5();
      this.preguntaElegida6();
      this.preguntaElegida7();
    }else if (this.cantidadPreguntasI == 8) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
      this.preguntaElegida4();
      this.preguntaElegida5();
      this.preguntaElegida6();
      this.preguntaElegida7();
      this.preguntaElegida8();
    }else if (this.cantidadPreguntasI == 9) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
      this.preguntaElegida4();
      this.preguntaElegida5();
      this.preguntaElegida6();
      this.preguntaElegida7();
      this.preguntaElegida8();
      this.preguntaElegida9();
    }else if (this.cantidadPreguntasI == 10) {
      this.preguntaElegida1();
      this.preguntaElegida2();
      this.preguntaElegida3();
      this.preguntaElegida4();
      this.preguntaElegida5();
      this.preguntaElegida6();
      this.preguntaElegida7();
      this.preguntaElegida8();
      this.preguntaElegida9();
      this.preguntaElegida10();
    }
  }

  public async cancelar() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: '¿QUIERES CANCELAR LA SIMULACION?',
      message: 'Si sales, no se guardaran las respuestas',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.router.navigateByUrl('inicio');
            var borrarRespuestas = new BorradorRespuestas();
            borrarRespuestas;
          },
        },
      ],
    });

    await alert.present();
  }
  //TODA LA LOGICA DE UNA PREGUNTA
  public preguntaElegida1() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta1 = dataExtraer.getPregunta1();
    console.log('Pregunta1:' + this.pregunta1);
    //Respuestas
    this.respuesta1 = dataExtraer.getRespuesta1();
    console.log('Respuesta1:' + this.respuesta1);
    this.respuesta2 = dataExtraer.getRespuesta2();
    console.log('Respuesta2:' + this.respuesta2);
    this.respuesta3 = dataExtraer.getRespuesta3();
    console.log('Respuesta3:' + this.respuesta3);
    this.respuesta4 = dataExtraer.getRespuesta4();
    console.log('Respuesta4:' + this.respuesta4);
  }

  //eleccion1
  public eleccionPregunta1_Opc1() {
    this.eleccion1 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto1(dataExtraer.getRespuesta1());
    dataEnviar.setEleccion1(this.eleccion1);
    document.getElementById('input_1').style.backgroundColor = 'green';
    document.getElementById('input_2').style.backgroundColor = '#fff5e5';
    document.getElementById('input_3').style.backgroundColor = '#fff5e5';
    document.getElementById('input_4').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta1_Opc2() {
    this.eleccion1 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto1(dataExtraer.getRespuesta2());
    dataEnviar.setEleccion1(this.eleccion1);
    document.getElementById('input_1').style.backgroundColor = '#fff5e5';
    document.getElementById('input_2').style.backgroundColor = 'green';
    document.getElementById('input_3').style.backgroundColor = '#fff5e5';
    document.getElementById('input_4').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta1_Opc3() {
    this.eleccion1 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto1(dataExtraer.getRespuesta3());
    dataEnviar.setEleccion1(this.eleccion1);
    document.getElementById('input_1').style.backgroundColor = '#fff5e5';
    document.getElementById('input_2').style.backgroundColor = '#fff5e5';
    document.getElementById('input_3').style.backgroundColor = 'green';
    document.getElementById('input_4').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta1_Opc4() {
    this.eleccion1 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto1(dataExtraer.getRespuesta4());
    dataEnviar.setEleccion1(this.eleccion1);
    document.getElementById('input_1').style.backgroundColor = '#fff5e5';
    document.getElementById('input_2').style.backgroundColor = '#fff5e5';
    document.getElementById('input_3').style.backgroundColor = '#fff5e5';
    document.getElementById('input_4').style.backgroundColor = 'green';
  }

  //Guardado
  public async save1() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      this.router.navigateByUrl('resultados');
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

  //TODA LA LOGICA DE DOS PREGUNTA
  public preguntaElegida2() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta2 = dataExtraer.getPregunta2();
    console.log('Pregunta2:' + this.pregunta2);
    //Respuestas
    this.respuesta5 = dataExtraer.getRespuesta5();
    console.log('Respuesta5:' + this.respuesta5);
    this.respuesta6 = dataExtraer.getRespuesta6();
    console.log('Respuesta6:' + this.respuesta6);
    this.respuesta7 = dataExtraer.getRespuesta7();
    console.log('Respuesta7:' + this.respuesta7);
    this.respuesta8 = dataExtraer.getRespuesta8();
    console.log('Respuesta8:' + this.respuesta8);
  }

  //eleccion1
  public eleccionPregunta2_Opc1() {
    this.eleccion2 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto2(dataExtraer.getRespuesta5());
    dataEnviar.setEleccion2(this.eleccion2);
    document.getElementById('input_5').style.backgroundColor = 'green';
    document.getElementById('input_6').style.backgroundColor = '#fff5e5';
    document.getElementById('input_7').style.backgroundColor = '#fff5e5';
    document.getElementById('input_8').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta2_Opc2() {
    this.eleccion2 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto2(dataExtraer.getRespuesta6());
    dataEnviar.setEleccion2(this.eleccion2);
    document.getElementById('input_5').style.backgroundColor = '#fff5e5';
    document.getElementById('input_6').style.backgroundColor = 'green';
    document.getElementById('input_7').style.backgroundColor = '#fff5e5';
    document.getElementById('input_8').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta2_Opc3() {
    this.eleccion2 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto2(dataExtraer.getRespuesta7());
    dataEnviar.setEleccion2(this.eleccion2);
    document.getElementById('input_5').style.backgroundColor = '#fff5e5';
    document.getElementById('input_6').style.backgroundColor = '#fff5e5';
    document.getElementById('input_7').style.backgroundColor = 'green';
    document.getElementById('input_8').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta2_Opc4() {
    this.eleccion2 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto2(dataExtraer.getRespuesta8());
    dataEnviar.setEleccion2(this.eleccion2);
    document.getElementById('input_5').style.backgroundColor = '#fff5e5';
    document.getElementById('input_6').style.backgroundColor = '#fff5e5';
    document.getElementById('input_7').style.backgroundColor = '#fff5e5';
    document.getElementById('input_8').style.backgroundColor = 'green';
  }

  //Guardado
  public async save2() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        this.router.navigateByUrl('resultados');
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

  //TODA LA LOGICA DE TES PREGUNTAS
  public preguntaElegida3() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta3 = dataExtraer.getPregunta3();
    console.log('Pregunta3:' + this.pregunta3);
    //Respuestas
    this.respuesta9 = dataExtraer.getRespuesta9();
    console.log('Respuesta9:' + this.respuesta9);
    this.respuesta10 = dataExtraer.getRespuesta10();
    console.log('Respuesta10:' + this.respuesta10);
    this.respuesta11 = dataExtraer.getRespuesta11();
    console.log('Respuesta11:' + this.respuesta11);
    this.respuesta12 = dataExtraer.getRespuesta12();
    console.log('Respuesta12:' + this.respuesta12);
  }

  //eleccion1
  public eleccionPregunta3_Opc1() {
    this.eleccion3 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto3(dataExtraer.getRespuesta9());
    dataEnviar.setEleccion3(this.eleccion3);
    document.getElementById('input_9').style.backgroundColor = 'green';
    document.getElementById('input_10').style.backgroundColor = '#fff5e5';
    document.getElementById('input_11').style.backgroundColor = '#fff5e5';
    document.getElementById('input_12').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta3_Opc2() {
    this.eleccion3 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto3(dataExtraer.getRespuesta10());
    dataEnviar.setEleccion3(this.eleccion3);
    document.getElementById('input_9').style.backgroundColor = '#fff5e5';
    document.getElementById('input_10').style.backgroundColor = 'green';
    document.getElementById('input_11').style.backgroundColor = '#fff5e5';
    document.getElementById('input_12').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta3_Opc3() {
    this.eleccion3 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto3(dataExtraer.getRespuesta11());
    dataEnviar.setEleccion3(this.eleccion3);
    document.getElementById('input_9').style.backgroundColor = '#fff5e5';
    document.getElementById('input_10').style.backgroundColor = '#fff5e5';
    document.getElementById('input_11').style.backgroundColor = 'green';
    document.getElementById('input_12').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta3_Opc4() {
    this.eleccion3 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto3(dataExtraer.getRespuesta12());
    dataEnviar.setEleccion3(this.eleccion3);
    document.getElementById('input_9').style.backgroundColor = '#fff5e5';
    document.getElementById('input_10').style.backgroundColor = '#fff5e5';
    document.getElementById('input_11').style.backgroundColor = '#fff5e5';
    document.getElementById('input_12').style.backgroundColor = 'green';
  }

  //Guardado
  public async save3() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          this.router.navigateByUrl('resultados');
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

  //TODA LA LOGICA DE CUATRO PREGUNTAS
  public preguntaElegida4() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta4 = dataExtraer.getPregunta4();
    console.log('Pregunta4:' + this.pregunta4);
    //Respuestas
    this.respuesta13 = dataExtraer.getRespuesta13();
    console.log('Respuesta13:' + this.respuesta13);
    this.respuesta14 = dataExtraer.getRespuesta14();
    console.log('Respuesta14:' + this.respuesta14);
    this.respuesta15 = dataExtraer.getRespuesta15();
    console.log('Respuesta15:' + this.respuesta15);
    this.respuesta16 = dataExtraer.getRespuesta16();
    console.log('Respuesta16:' + this.respuesta16);
  }

  //eleccion1
  public eleccionPregunta4_Opc1() {
    this.eleccion4 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto4(dataExtraer.getRespuesta13());
    dataEnviar.setEleccion4(this.eleccion4);
    document.getElementById('input_13').style.backgroundColor = 'green';
    document.getElementById('input_14').style.backgroundColor = '#fff5e5';
    document.getElementById('input_15').style.backgroundColor = '#fff5e5';
    document.getElementById('input_16').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta4_Opc2() {
    this.eleccion4 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto4(dataExtraer.getRespuesta14());
    dataEnviar.setEleccion4(this.eleccion4);
    document.getElementById('input_13').style.backgroundColor = '#fff5e5';
    document.getElementById('input_14').style.backgroundColor = 'green';
    document.getElementById('input_15').style.backgroundColor = '#fff5e5';
    document.getElementById('input_16').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta4_Opc3() {
    this.eleccion4 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto4(dataExtraer.getRespuesta15());
    dataEnviar.setEleccion4(this.eleccion4);
    document.getElementById('input_13').style.backgroundColor = '#fff5e5';
    document.getElementById('input_14').style.backgroundColor = '#fff5e5';
    document.getElementById('input_15').style.backgroundColor = 'green';
    document.getElementById('input_16').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta4_Opc4() {
    this.eleccion4 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto4(dataExtraer.getRespuesta16());
    dataEnviar.setEleccion4(this.eleccion4);
    document.getElementById('input_13').style.backgroundColor = '#fff5e5';
    document.getElementById('input_14').style.backgroundColor = '#fff5e5';
    document.getElementById('input_15').style.backgroundColor = '#fff5e5';
    document.getElementById('input_16').style.backgroundColor = 'green';
  }

  //Guardado
  public async save4() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          /*************Validacion4*************/
          if (parseInt(this.eleccion4) >= 1 && parseInt(this.eleccion4) <= 4) {
            console.log('Guardado de 4 pregunta');
            console.log('Seleccionastes la respuesta: ' + this.eleccion4);
            dataEnviar.setEleccion4(this.eleccion4);
            this.router.navigateByUrl('resultados');
          } else if (this.eleccion4 == undefined) {
            console.log('No has selleccionado respuesta en la pregunta 4');

            const alert = await this.alerta.create({
              header: 'ALERTA',
              message: 'PREGUNTA4: No seleccionaste respuesta',
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
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

  //TODA LA LOGICA DE CINCO PREGUNTAS
  public preguntaElegida5() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta5 = dataExtraer.getPregunta5();
    console.log('Pregunta5:' + this.pregunta5);
    //Respuestas
    this.respuesta17 = dataExtraer.getRespuesta17();
    console.log('Respuesta17:' + this.respuesta17);
    this.respuesta18 = dataExtraer.getRespuesta18();
    console.log('Respuesta18:' + this.respuesta18);
    this.respuesta19 = dataExtraer.getRespuesta19();
    console.log('Respuesta19:' + this.respuesta19);
    this.respuesta20 = dataExtraer.getRespuesta20();
    console.log('Respuesta20:' + this.respuesta20);
  }

  //eleccion1
  public eleccionPregunta5_Opc1() {
    this.eleccion5 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto5(dataExtraer.getRespuesta17());
    dataEnviar.setEleccion5(this.eleccion5);
    document.getElementById('input_17').style.backgroundColor = 'green';
    document.getElementById('input_18').style.backgroundColor = '#fff5e5';
    document.getElementById('input_19').style.backgroundColor = '#fff5e5';
    document.getElementById('input_20').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta5_Opc2() {
    this.eleccion5 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto5(dataExtraer.getRespuesta18());
    dataEnviar.setEleccion5(this.eleccion5);
    document.getElementById('input_17').style.backgroundColor = '#fff5e5';
    document.getElementById('input_18').style.backgroundColor = 'green';
    document.getElementById('input_19').style.backgroundColor = '#fff5e5';
    document.getElementById('input_20').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta5_Opc3() {
    this.eleccion5 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto5(dataExtraer.getRespuesta19());
    dataEnviar.setEleccion5(this.eleccion5);
    document.getElementById('input_17').style.backgroundColor = '#fff5e5';
    document.getElementById('input_18').style.backgroundColor = '#fff5e5';
    document.getElementById('input_19').style.backgroundColor = 'green';
    document.getElementById('input_20').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta5_Opc4() {
    this.eleccion5 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto5(dataExtraer.getRespuesta20());
    dataEnviar.setEleccion5(this.eleccion5);
    document.getElementById('input_17').style.backgroundColor = '#fff5e5';
    document.getElementById('input_18').style.backgroundColor = '#fff5e5';
    document.getElementById('input_19').style.backgroundColor = '#fff5e5';
    document.getElementById('input_20').style.backgroundColor = 'green';
  }

  //Guardado
  public async save5() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          /*************Validacion4*************/
          if (parseInt(this.eleccion4) >= 1 && parseInt(this.eleccion4) <= 4) {
            console.log('Guardado de 4 pregunta');
            console.log('Seleccionastes la respuesta: ' + this.eleccion4);
            dataEnviar.setEleccion4(this.eleccion4);
            /*************Validacion5*************/
            if (
              parseInt(this.eleccion5) >= 1 &&
              parseInt(this.eleccion5) <= 4
            ) {
              console.log('Guardado de 5 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion5);
              dataEnviar.setEleccion5(this.eleccion5);
              this.router.navigateByUrl('resultados');
            } else if (this.eleccion5 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 5');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA5: No seleccionaste respuesta',
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
          } else if (this.eleccion4 == undefined) {
            console.log('No has selleccionado respuesta en la pregunta 4');

            const alert = await this.alerta.create({
              header: 'ALERTA',
              message: 'PREGUNTA4: No seleccionaste respuesta',
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
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

  //TODA LA LOGICA DE SEIS PREGUNTAS
  public preguntaElegida6() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta6 = dataExtraer.getPregunta6();
    console.log('Pregunta6:' + this.pregunta6);
    //Respuestas
    this.respuesta21 = dataExtraer.getRespuesta21();
    console.log('Respuesta21:' + this.respuesta21);
    this.respuesta22 = dataExtraer.getRespuesta22();
    console.log('Respuesta22:' + this.respuesta22);
    this.respuesta23 = dataExtraer.getRespuesta23();
    console.log('Respuesta23:' + this.respuesta23);
    this.respuesta24 = dataExtraer.getRespuesta24();
    console.log('Respuesta24:' + this.respuesta24);
  }

  //eleccion1
  public eleccionPregunta6_Opc1() {
    this.eleccion6 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto6(dataExtraer.getRespuesta21());
    dataEnviar.setEleccion6(this.eleccion6);
    document.getElementById('input_21').style.backgroundColor = 'green';
    document.getElementById('input_22').style.backgroundColor = '#fff5e5';
    document.getElementById('input_23').style.backgroundColor = '#fff5e5';
    document.getElementById('input_24').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta6_Opc2() {
    this.eleccion6 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto6(dataExtraer.getRespuesta22());
    dataEnviar.setEleccion6(this.eleccion6);
    document.getElementById('input_21').style.backgroundColor = '#fff5e5';
    document.getElementById('input_22').style.backgroundColor = 'green';
    document.getElementById('input_23').style.backgroundColor = '#fff5e5';
    document.getElementById('input_24').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta6_Opc3() {
    this.eleccion6 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto6(dataExtraer.getRespuesta23());
    dataEnviar.setEleccion6(this.eleccion6);
    document.getElementById('input_21').style.backgroundColor = '#fff5e5';
    document.getElementById('input_22').style.backgroundColor = '#fff5e5';
    document.getElementById('input_23').style.backgroundColor = 'green';
    document.getElementById('input_24').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta6_Opc4() {
    this.eleccion6 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto6(dataExtraer.getRespuesta24());
    dataEnviar.setEleccion6(this.eleccion6);
    document.getElementById('input_21').style.backgroundColor = '#fff5e5';
    document.getElementById('input_22').style.backgroundColor = '#fff5e5';
    document.getElementById('input_23').style.backgroundColor = '#fff5e5';
    document.getElementById('input_24').style.backgroundColor = 'green';
  }

  //Guardado
  public async save6() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          /*************Validacion4*************/
          if (parseInt(this.eleccion4) >= 1 && parseInt(this.eleccion4) <= 4) {
            console.log('Guardado de 4 pregunta');
            console.log('Seleccionastes la respuesta: ' + this.eleccion4);
            dataEnviar.setEleccion4(this.eleccion4);
            /*************Validacion5*************/
            if (
              parseInt(this.eleccion5) >= 1 &&
              parseInt(this.eleccion5) <= 4
            ) {
              console.log('Guardado de 5 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion5);
              dataEnviar.setEleccion5(this.eleccion5);
              
              /*************Validacion6*************/
            if (
              parseInt(this.eleccion6) >= 1 &&
              parseInt(this.eleccion6) <= 4
            ) {
              console.log('Guardado de 6 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion6);
              dataEnviar.setEleccion6(this.eleccion6);
              this.router.navigateByUrl('resultados');
            } else if (this.eleccion6 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 6');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA6: No seleccionaste respuesta',
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

            } else if (this.eleccion5 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 5');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA5: No seleccionaste respuesta',
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
          } else if (this.eleccion4 == undefined) {
            console.log('No has selleccionado respuesta en la pregunta 4');

            const alert = await this.alerta.create({
              header: 'ALERTA',
              message: 'PREGUNTA4: No seleccionaste respuesta',
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
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

   //TODA LA LOGICA DE CIETE PREGUNTAS
   public preguntaElegida7() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta7 = dataExtraer.getPregunta7();
    console.log('Pregunta7:' + this.pregunta7);
    //Respuestas
    this.respuesta25 = dataExtraer.getRespuesta25();
    console.log('Respuesta25:' + this.respuesta25);
    this.respuesta26 = dataExtraer.getRespuesta26();
    console.log('Respuesta26:' + this.respuesta26);
    this.respuesta27 = dataExtraer.getRespuesta27();
    console.log('Respuesta27:' + this.respuesta27);
    this.respuesta28 = dataExtraer.getRespuesta28();
    console.log('Respuesta28:' + this.respuesta28);
  }

  //eleccion1
  public eleccionPregunta7_Opc1() {
    this.eleccion7 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto7(dataExtraer.getRespuesta25());
    dataEnviar.setEleccion7(this.eleccion7);
    document.getElementById('input_25').style.backgroundColor = 'green';
    document.getElementById('input_26').style.backgroundColor = '#fff5e5';
    document.getElementById('input_27').style.backgroundColor = '#fff5e5';
    document.getElementById('input_28').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta7_Opc2() {
    this.eleccion7 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto7(dataExtraer.getRespuesta26());
    dataEnviar.setEleccion7(this.eleccion7);
    document.getElementById('input_25').style.backgroundColor = '#fff5e5';
    document.getElementById('input_26').style.backgroundColor = 'green';
    document.getElementById('input_27').style.backgroundColor = '#fff5e5';
    document.getElementById('input_28').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta7_Opc3() {
    this.eleccion7 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto7(dataExtraer.getRespuesta27());
    dataEnviar.setEleccion7(this.eleccion7);
    document.getElementById('input_25').style.backgroundColor = '#fff5e5';
    document.getElementById('input_26').style.backgroundColor = '#fff5e5';
    document.getElementById('input_27').style.backgroundColor = 'green';
    document.getElementById('input_28').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta7_Opc4() {
    this.eleccion7 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto7(dataExtraer.getRespuesta28());
    dataEnviar.setEleccion7(this.eleccion7);
    document.getElementById('input_25').style.backgroundColor = '#fff5e5';
    document.getElementById('input_26').style.backgroundColor = '#fff5e5';
    document.getElementById('input_27').style.backgroundColor = '#fff5e5';
    document.getElementById('input_28').style.backgroundColor = 'green';
  }

  //Guardado
  public async save7() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          /*************Validacion4*************/
          if (parseInt(this.eleccion4) >= 1 && parseInt(this.eleccion4) <= 4) {
            console.log('Guardado de 4 pregunta');
            console.log('Seleccionastes la respuesta: ' + this.eleccion4);
            dataEnviar.setEleccion4(this.eleccion4);
            /*************Validacion5*************/
            if (
              parseInt(this.eleccion5) >= 1 &&
              parseInt(this.eleccion5) <= 4
            ) {
              console.log('Guardado de 5 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion5);
              dataEnviar.setEleccion5(this.eleccion5);
              
              /*************Validacion6*************/
            if (
              parseInt(this.eleccion6) >= 1 &&
              parseInt(this.eleccion6) <= 4
            ) {
              console.log('Guardado de 6 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion6);
              dataEnviar.setEleccion6(this.eleccion6);
              /*************Validacion7*************/
            if (
              parseInt(this.eleccion7) >= 1 &&
              parseInt(this.eleccion7) <= 4
            ) {
              console.log('Guardado de 7 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion7);
              dataEnviar.setEleccion7(this.eleccion7);
              this.router.navigateByUrl('resultados');
            } else if (this.eleccion7 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 7');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA7: No seleccionaste respuesta',
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
            } else if (this.eleccion6 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 6');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA6: No seleccionaste respuesta',
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

            } else if (this.eleccion5 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 5');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA5: No seleccionaste respuesta',
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
          } else if (this.eleccion4 == undefined) {
            console.log('No has selleccionado respuesta en la pregunta 4');

            const alert = await this.alerta.create({
              header: 'ALERTA',
              message: 'PREGUNTA4: No seleccionaste respuesta',
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
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

  //TODA LA LOGICA DE OCHO PREGUNTAS
  public preguntaElegida8() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta8 = dataExtraer.getPregunta8();
    console.log('Pregunta8:' + this.pregunta8);
    //Respuestas
    this.respuesta29 = dataExtraer.getRespuesta29();
    console.log('Respuesta29:' + this.respuesta29);
    this.respuesta30 = dataExtraer.getRespuesta30();
    console.log('Respuesta30:' + this.respuesta30);
    this.respuesta31 = dataExtraer.getRespuesta31();
    console.log('Respuesta31:' + this.respuesta31);
    this.respuesta32 = dataExtraer.getRespuesta32();
    console.log('Respuesta32:' + this.respuesta32);
  }

  //eleccion1
  public eleccionPregunta8_Opc1() {
    this.eleccion8 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto8(dataExtraer.getRespuesta29());
    dataEnviar.setEleccion8(this.eleccion8);
    document.getElementById('input_29').style.backgroundColor = 'green';
    document.getElementById('input_30').style.backgroundColor = '#fff5e5';
    document.getElementById('input_31').style.backgroundColor = '#fff5e5';
    document.getElementById('input_32').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta8_Opc2() {
    this.eleccion8 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto8(dataExtraer.getRespuesta30());
    dataEnviar.setEleccion8(this.eleccion8);
    document.getElementById('input_29').style.backgroundColor = '#fff5e5';
    document.getElementById('input_30').style.backgroundColor = 'green';
    document.getElementById('input_31').style.backgroundColor = '#fff5e5';
    document.getElementById('input_32').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta8_Opc3() {
    this.eleccion8 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto8(dataExtraer.getRespuesta31());
    dataEnviar.setEleccion8(this.eleccion8);
    document.getElementById('input_29').style.backgroundColor = '#fff5e5';
    document.getElementById('input_30').style.backgroundColor = '#fff5e5';
    document.getElementById('input_31').style.backgroundColor = 'green';
    document.getElementById('input_32').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta8_Opc4() {
    this.eleccion8 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto8(dataExtraer.getRespuesta32());
    dataEnviar.setEleccion8(this.eleccion8);
    document.getElementById('input_29').style.backgroundColor = '#fff5e5';
    document.getElementById('input_30').style.backgroundColor = '#fff5e5';
    document.getElementById('input_31').style.backgroundColor = '#fff5e5';
    document.getElementById('input_32').style.backgroundColor = 'green';
  }

  //Guardado
  public async save8() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          /*************Validacion4*************/
          if (parseInt(this.eleccion4) >= 1 && parseInt(this.eleccion4) <= 4) {
            console.log('Guardado de 4 pregunta');
            console.log('Seleccionastes la respuesta: ' + this.eleccion4);
            dataEnviar.setEleccion4(this.eleccion4);
            /*************Validacion5*************/
            if (
              parseInt(this.eleccion5) >= 1 &&
              parseInt(this.eleccion5) <= 4
            ) {
              console.log('Guardado de 5 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion5);
              dataEnviar.setEleccion5(this.eleccion5);
              
              /*************Validacion6*************/
            if (
              parseInt(this.eleccion6) >= 1 &&
              parseInt(this.eleccion6) <= 4
            ) {
              console.log('Guardado de 6 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion6);
              dataEnviar.setEleccion6(this.eleccion6);
              /*************Validacion7*************/
            if (
              parseInt(this.eleccion7) >= 1 &&
              parseInt(this.eleccion7) <= 4
            ) {
              console.log('Guardado de 7 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion7);
              dataEnviar.setEleccion7(this.eleccion7);
              /*************Validacion8*************/
            if (
              parseInt(this.eleccion8) >= 1 &&
              parseInt(this.eleccion8) <= 4
            ) {
              console.log('Guardado de 8 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion8);
              dataEnviar.setEleccion8(this.eleccion8);
              this.router.navigateByUrl('resultados');
            } else if (this.eleccion8 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 8');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA8: No seleccionaste respuesta',
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
            } else if (this.eleccion7 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 7');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA7: No seleccionaste respuesta',
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
            } else if (this.eleccion6 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 6');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA6: No seleccionaste respuesta',
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

            } else if (this.eleccion5 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 5');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA5: No seleccionaste respuesta',
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
          } else if (this.eleccion4 == undefined) {
            console.log('No has selleccionado respuesta en la pregunta 4');

            const alert = await this.alerta.create({
              header: 'ALERTA',
              message: 'PREGUNTA4: No seleccionaste respuesta',
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
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }


  //TODA LA LOGICA DE NUEVE PREGUNTAS
  public preguntaElegida9() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta9 = dataExtraer.getPregunta9();
    console.log('Pregunta9:' + this.pregunta9);
    //Respuestas
    this.respuesta33 = dataExtraer.getRespuesta33();
    console.log('Respuesta33:' + this.respuesta33);
    this.respuesta34 = dataExtraer.getRespuesta34();
    console.log('Respuesta34:' + this.respuesta34);
    this.respuesta35 = dataExtraer.getRespuesta35();
    console.log('Respuesta35:' + this.respuesta35);
    this.respuesta36 = dataExtraer.getRespuesta36();
    console.log('Respuesta36:' + this.respuesta36);
  }

  //eleccion1
  public eleccionPregunta9_Opc1() {
    this.eleccion9 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto9(dataExtraer.getRespuesta33());
    dataEnviar.setEleccion9(this.eleccion9);
    document.getElementById('input_33').style.backgroundColor = 'green';
    document.getElementById('input_34').style.backgroundColor = '#fff5e5';
    document.getElementById('input_35').style.backgroundColor = '#fff5e5';
    document.getElementById('input_36').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta9_Opc2() {
    this.eleccion9 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto9(dataExtraer.getRespuesta34());
    dataEnviar.setEleccion9(this.eleccion9);
    document.getElementById('input_33').style.backgroundColor = '#fff5e5';
    document.getElementById('input_34').style.backgroundColor = 'green';
    document.getElementById('input_35').style.backgroundColor = '#fff5e5';
    document.getElementById('input_36').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta9_Opc3() {
    this.eleccion9 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto9(dataExtraer.getRespuesta35());
    dataEnviar.setEleccion9(this.eleccion9);
    document.getElementById('input_33').style.backgroundColor = '#fff5e5';
    document.getElementById('input_34').style.backgroundColor = '#fff5e5';
    document.getElementById('input_35').style.backgroundColor = 'green';
    document.getElementById('input_36').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta9_Opc4() {
    this.eleccion9 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto9(dataExtraer.getRespuesta36());
    dataEnviar.setEleccion9(this.eleccion9);
    document.getElementById('input_33').style.backgroundColor = '#fff5e5';
    document.getElementById('input_34').style.backgroundColor = '#fff5e5';
    document.getElementById('input_35').style.backgroundColor = '#fff5e5';
    document.getElementById('input_36').style.backgroundColor = 'green';
  }

  //Guardado
  public async save9() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          /*************Validacion4*************/
          if (parseInt(this.eleccion4) >= 1 && parseInt(this.eleccion4) <= 4) {
            console.log('Guardado de 4 pregunta');
            console.log('Seleccionastes la respuesta: ' + this.eleccion4);
            dataEnviar.setEleccion4(this.eleccion4);
            /*************Validacion5*************/
            if (
              parseInt(this.eleccion5) >= 1 &&
              parseInt(this.eleccion5) <= 4
            ) {
              console.log('Guardado de 5 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion5);
              dataEnviar.setEleccion5(this.eleccion5);
              
              /*************Validacion6*************/
            if (
              parseInt(this.eleccion6) >= 1 &&
              parseInt(this.eleccion6) <= 4
            ) {
              console.log('Guardado de 6 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion6);
              dataEnviar.setEleccion6(this.eleccion6);
              /*************Validacion7*************/
            if (
              parseInt(this.eleccion7) >= 1 &&
              parseInt(this.eleccion7) <= 4
            ) {
              console.log('Guardado de 7 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion7);
              dataEnviar.setEleccion7(this.eleccion7);
              /*************Validacion8*************/
            if (
              parseInt(this.eleccion8) >= 1 &&
              parseInt(this.eleccion8) <= 4
            ) {
              console.log('Guardado de 8 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion8);
              dataEnviar.setEleccion8(this.eleccion8);
              /*************Validacion9*************/
            if (
              parseInt(this.eleccion9) >= 1 &&
              parseInt(this.eleccion9) <= 4
            ) {
              console.log('Guardado de 9 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion9);
              dataEnviar.setEleccion9(this.eleccion9);
              this.router.navigateByUrl('resultados');
            } else if (this.eleccion9 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 9');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA9: No seleccionaste respuesta',
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
            } else if (this.eleccion8 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 8');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA8: No seleccionaste respuesta',
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
            } else if (this.eleccion7 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 7');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA7: No seleccionaste respuesta',
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
            } else if (this.eleccion6 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 6');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA6: No seleccionaste respuesta',
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

            } else if (this.eleccion5 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 5');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA5: No seleccionaste respuesta',
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
          } else if (this.eleccion4 == undefined) {
            console.log('No has selleccionado respuesta en la pregunta 4');

            const alert = await this.alerta.create({
              header: 'ALERTA',
              message: 'PREGUNTA4: No seleccionaste respuesta',
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
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }


  //TODA LA LOGICA DE DIEZ PREGUNTAS
  public preguntaElegida10() {
    var dataEnviar = new EstiloPreguntas();
    console.log(dataEnviar);
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();
    /*************Extrallendo Datos de la pregunta 1*************/
    //Pregunta
    this.pregunta10 = dataExtraer.getPregunta10();
    console.log('Pregunta10:' + this.pregunta10);
    //Respuestas
    this.respuesta37 = dataExtraer.getRespuesta37();
    console.log('Respuesta37:' + this.respuesta37);
    this.respuesta38 = dataExtraer.getRespuesta38();
    console.log('Respuesta38:' + this.respuesta38);
    this.respuesta39 = dataExtraer.getRespuesta39();
    console.log('Respuesta39:' + this.respuesta39);
    this.respuesta40 = dataExtraer.getRespuesta40();
    console.log('Respuesta40:' + this.respuesta40);
  }

  //eleccion1
  public eleccionPregunta10_Opc1() {
    this.eleccion10 = '1';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto10(dataExtraer.getRespuesta37());
    dataEnviar.setEleccion10(this.eleccion10);
    document.getElementById('input_37').style.backgroundColor = 'green';
    document.getElementById('input_38').style.backgroundColor = '#fff5e5';
    document.getElementById('input_39').style.backgroundColor = '#fff5e5';
    document.getElementById('input_40').style.backgroundColor = '#fff5e5';
  }
  //eleccion2
  public eleccionPregunta10_Opc2() {
    this.eleccion10 = '2';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto10(dataExtraer.getRespuesta38());
    dataEnviar.setEleccion10(this.eleccion10);
    document.getElementById('input_37').style.backgroundColor = '#fff5e5';
    document.getElementById('input_38').style.backgroundColor = 'green';
    document.getElementById('input_39').style.backgroundColor = '#fff5e5';
    document.getElementById('input_40').style.backgroundColor = '#fff5e5';
  }
  //eleccion3
  public eleccionPregunta10_Opc3() {
    this.eleccion10 = '3';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto10(dataExtraer.getRespuesta39());
    dataEnviar.setEleccion10(this.eleccion10);
    document.getElementById('input_37').style.backgroundColor = '#fff5e5';
    document.getElementById('input_38').style.backgroundColor = '#fff5e5';
    document.getElementById('input_39').style.backgroundColor = 'green';
    document.getElementById('input_40').style.backgroundColor = '#fff5e5';
  }
  //eleccion4
  public eleccionPregunta10_Opc4() {
    this.eleccion10 = '4';
    var dataEnviar = new EstiloPreguntas();
    var dataExtraer = new EstiloPreguntas();
    dataEnviar.setEleccionTexto10(dataExtraer.getRespuesta40());
    dataEnviar.setEleccion10(this.eleccion10);
    document.getElementById('input_37').style.backgroundColor = '#fff5e5';
    document.getElementById('input_38').style.backgroundColor = '#fff5e5';
    document.getElementById('input_39').style.backgroundColor = '#fff5e5';
    document.getElementById('input_40').style.backgroundColor = 'green';
  }

  //Guardado
  public async save10() {
    var dataEnviar = new EstiloPreguntas();
    //EXTRALLENDO LOS DATOS DEL LOCAL STORAGE
    var dataExtraer = new EstiloPreguntas();

    /*************Validacion1*************/
    if (parseInt(this.eleccion1) >= 1 && parseInt(this.eleccion1) <= 4) {
      console.log('Guardado de 1 pregunta');
      console.log('Seleccionastes la respuesta: ' + this.eleccion1);
      dataEnviar.setEleccion1(this.eleccion1);
      /*************Validacion2*************/
      if (parseInt(this.eleccion2) >= 1 && parseInt(this.eleccion2) <= 4) {
        console.log('Guardado de 2 pregunta');
        console.log('Seleccionastes la respuesta: ' + this.eleccion2);
        dataEnviar.setEleccion2(this.eleccion2);
        /*************Validacion3*************/
        if (parseInt(this.eleccion3) >= 1 && parseInt(this.eleccion3) <= 4) {
          console.log('Guardado de 3 pregunta');
          console.log('Seleccionastes la respuesta: ' + this.eleccion3);
          dataEnviar.setEleccion3(this.eleccion3);
          /*************Validacion4*************/
          if (parseInt(this.eleccion4) >= 1 && parseInt(this.eleccion4) <= 4) {
            console.log('Guardado de 4 pregunta');
            console.log('Seleccionastes la respuesta: ' + this.eleccion4);
            dataEnviar.setEleccion4(this.eleccion4);
            /*************Validacion5*************/
            if (
              parseInt(this.eleccion5) >= 1 &&
              parseInt(this.eleccion5) <= 4
            ) {
              console.log('Guardado de 5 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion5);
              dataEnviar.setEleccion5(this.eleccion5);
              
              /*************Validacion6*************/
            if (
              parseInt(this.eleccion6) >= 1 &&
              parseInt(this.eleccion6) <= 4
            ) {
              console.log('Guardado de 6 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion6);
              dataEnviar.setEleccion6(this.eleccion6);
              /*************Validacion7*************/
            if (
              parseInt(this.eleccion7) >= 1 &&
              parseInt(this.eleccion7) <= 4
            ) {
              console.log('Guardado de 7 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion7);
              dataEnviar.setEleccion7(this.eleccion7);
              /*************Validacion8*************/
            if (
              parseInt(this.eleccion8) >= 1 &&
              parseInt(this.eleccion8) <= 4
            ) {
              console.log('Guardado de 8 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion8);
              dataEnviar.setEleccion8(this.eleccion8);
              /*************Validacion9*************/
            if (
              parseInt(this.eleccion9) >= 1 &&
              parseInt(this.eleccion9) <= 4
            ) {
              console.log('Guardado de 9 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion9);
              dataEnviar.setEleccion9(this.eleccion9);
              /*************Validacion10*************/
            if (
              parseInt(this.eleccion10) >= 1 &&
              parseInt(this.eleccion10) <= 4
            ) {
              console.log('Guardado de 10 pregunta');
              console.log('Seleccionastes la respuesta: ' + this.eleccion10);
              dataEnviar.setEleccion10(this.eleccion10);
              this.router.navigateByUrl('resultados');
            } else if (this.eleccion10 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 10');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA10: No seleccionaste respuesta',
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
            } else if (this.eleccion9 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 9');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA9: No seleccionaste respuesta',
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
            } else if (this.eleccion8 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 8');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA8: No seleccionaste respuesta',
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
            } else if (this.eleccion7 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 7');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA7: No seleccionaste respuesta',
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
            } else if (this.eleccion6 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 6');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA6: No seleccionaste respuesta',
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

            } else if (this.eleccion5 == undefined) {
              console.log('No has selleccionado respuesta en la pregunta 5');

              const alert = await this.alerta.create({
                header: 'ALERTA',
                message: 'PREGUNTA5: No seleccionaste respuesta',
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
          } else if (this.eleccion4 == undefined) {
            console.log('No has selleccionado respuesta en la pregunta 4');

            const alert = await this.alerta.create({
              header: 'ALERTA',
              message: 'PREGUNTA4: No seleccionaste respuesta',
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
        } else if (this.eleccion3 == undefined) {
          console.log('No has selleccionado respuesta en la pregunta 3');

          const alert = await this.alerta.create({
            header: 'ALERTA',
            message: 'PREGUNTA3: No seleccionaste respuesta',
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
      } else if (this.eleccion2 == undefined) {
        console.log('No has selleccionado respuesta en la pregunta 2');

        const alert = await this.alerta.create({
          header: 'ALERTA',
          message: 'PREGUNTA2: No seleccionaste respuesta',
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
    } else if (this.eleccion1 == undefined) {
      console.log('No has selleccionado respuesta en la pregunta 1');

      const alert = await this.alerta.create({
        header: 'ALERTA',
        message: 'PREGUNTA1: No seleccionaste respuesta',
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
  }

  ngOnInit() {}
}
