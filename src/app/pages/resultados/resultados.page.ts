import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPregunta } from 'src/app/models/datos-pregunta';
import { EstiloPreguntas } from 'src/app/models/estilo-preguntas';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
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

  correctaTexto1: string;
  correctaTexto2: string;
  correctaTexto3: string;
  correctaTexto4: string;
  correctaTexto5: string;
  correctaTexto6: string;
  correctaTexto7: string;
  correctaTexto8: string;
  correctaTexto9: string;
  correctaTexto10: string;
  correctaTexto11: string;
  correctaTexto12: string;
  correctaTexto13: string;
  correctaTexto14: string;
  correctaTexto15: string;
  correctaTexto16: string;
  correctaTexto17: string;
  correctaTexto18: string;
  correctaTexto19: string;
  correctaTexto20: string;
  correctaTexto21: string;
  correctaTexto22: string;
  correctaTexto23: string;
  correctaTexto24: string;
  correctaTexto25: string;
  correctaTexto26: string;
  correctaTexto27: string;
  correctaTexto28: string;
  correctaTexto29: string;
  correctaTexto30: string;
  correctaTexto31: string;
  correctaTexto32: string;
  correctaTexto33: string;
  correctaTexto34: string;
  correctaTexto35: string;
  correctaTexto36: string;
  correctaTexto37: string;
  correctaTexto38: string;
  correctaTexto39: string;
  correctaTexto40: string;

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

  check1: number;
  check2: number;
  check3: number;
  check4: number;
  check5: number;
  check6: number;
  check7: number;
  check8: number;
  check9: number;
  check10: number;
  check11: number;
  check12: number;
  check13: number;
  check14: number;
  check15: number;
  check16: number;
  check17: number;
  check18: number;
  check19: number;
  check20: number;
  check21: number;
  check22: number;
  check23: number;
  check24: number;
  check25: number;
  check26: number;
  check27: number;
  check28: number;
  check29: number;
  check30: number;
  check31: number;
  check32: number;
  check33: number;
  check34: number;
  check35: number;
  check36: number;
  check37: number;
  check38: number;
  check39: number;
  check40: number;

  restuladosCorrectos: number;
  resultadosIncorrectos: number;

  cantidadPreguntasI: number;
  nombre: string;

  constructor(private router: Router) {
    this.restuladosCorrectos = 0;
    this.resultadosIncorrectos = 0;
    /*Extrallendo los datos */
    var data = new DatosPregunta();
    console.log(data);
    //Extraccion de la cantidad de preguntas
    this.cantidadPreguntasI = data.getCantidadPreguntasLocalHost();
    console.log('Cantidad de preguntas: ' + this.cantidadPreguntasI);
    //Extraccion del nombre
    this.nombre = data.getNombreLocalHost();
    console.log('Nombre: ' + this.nombre);
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();
    //Eleccion1
    if (this.cantidadPreguntasI == 1) {
      this.pregunta1 = dataExtraer.getPregunta1();
      this.correcta1 = dataExtraer.getCorrecta1();
      this.eleccion1 = dataExtraer.getEleccion1();
      this.eleccionTexto1 = dataExtraer.getEleccionTexto1();
      this.correctaTexto1 = dataExtraer.getCorrectaTexto1();
      if (this.correcta1 == '1') {
        this.correctaTexto1 = dataExtraer.getRespuesta1();
      }
      if (this.correcta1 == '2') {
        this.correctaTexto1 = dataExtraer.getRespuesta2();
      }
      if (this.correcta1 == '3') {
        this.correctaTexto1 = dataExtraer.getRespuesta3();
      }
      if (this.correcta1 == '4') {
        this.correctaTexto1 = dataExtraer.getRespuesta4();
      }
      this.eleccionResultados1();
    }//Eleccion2
    else if (this.cantidadPreguntasI == 2) {
      this.pregunta2 = dataExtraer.getPregunta2();
      this.correcta2 = dataExtraer.getCorrecta2();
      this.eleccion2 = dataExtraer.getEleccion2();
      this.eleccionTexto2 = dataExtraer.getEleccionTexto2();
      this.correctaTexto2 = dataExtraer.getCorrectaTexto2();
      if(this.correcta2 == "1"){
        this.correctaTexto2 = dataExtraer.getRespuesta5();
      }if(this.correcta2 == "2"){
        this.correctaTexto2 = dataExtraer.getRespuesta6();
      }if(this.correcta2 == "3"){
        this.correctaTexto2 = dataExtraer.getRespuesta7();
      }if(this.correcta2 == "4"){
        this.correctaTexto2 = dataExtraer.getRespuesta8();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
    }//Eleccion3
    else if (this.cantidadPreguntasI == 3) {
      this.pregunta3 = dataExtraer.getPregunta3();
      this.correcta3 = dataExtraer.getCorrecta3();
      this.eleccion3 = dataExtraer.getEleccion3();
      this.eleccionTexto3 = dataExtraer.getEleccionTexto3();
      this.correctaTexto3 = dataExtraer.getCorrectaTexto3();
      if(this.correcta3 == "1"){
        this.correctaTexto3 = dataExtraer.getRespuesta9();
      }if(this.correcta3 == "2"){
        this.correctaTexto3 = dataExtraer.getRespuesta10();
      }if(this.correcta3 == "3"){
        this.correctaTexto3 = dataExtraer.getRespuesta11();
      }if(this.correcta3 == "4"){
        this.correctaTexto3 = dataExtraer.getRespuesta12();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
    }//Eleccion4
    else if (this.cantidadPreguntasI == 4) {
      this.pregunta4 = dataExtraer.getPregunta4();
      this.correcta4 = dataExtraer.getCorrecta4();
      this.eleccion4 = dataExtraer.getEleccion4();
      this.eleccionTexto4 = dataExtraer.getEleccionTexto4();
      this.correctaTexto4 = dataExtraer.getCorrectaTexto4();
      if(this.correcta4 == "1"){
        this.correctaTexto4 = dataExtraer.getRespuesta13();
      }if(this.correcta4 == "2"){
        this.correctaTexto4 = dataExtraer.getRespuesta14();
      }if(this.correcta4 == "3"){
        this.correctaTexto4 = dataExtraer.getRespuesta15();
      }if(this.correcta4 == "4"){
        this.correctaTexto4 = dataExtraer.getRespuesta16();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
      this.eleccionResultados4()
    }//Eleccion5
    else if (this.cantidadPreguntasI == 5) {
      this.pregunta5 = dataExtraer.getPregunta5();
      this.correcta5 = dataExtraer.getCorrecta5();
      this.eleccion5 = dataExtraer.getEleccion5();
      this.eleccionTexto5 = dataExtraer.getEleccionTexto5();
      this.correctaTexto5 = dataExtraer.getCorrectaTexto5();
      if(this.correcta5 == "1"){
        this.correctaTexto5 = dataExtraer.getRespuesta17();
      }if(this.correcta5 == "2"){
        this.correctaTexto5 = dataExtraer.getRespuesta18();
      }if(this.correcta5 == "3"){
        this.correctaTexto5 = dataExtraer.getRespuesta19();
      }if(this.correcta5 == "4"){
        this.correctaTexto5 = dataExtraer.getRespuesta20();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
      this.eleccionResultados4()
      this.eleccionResultados5()
    }//Eleccion6
    else if (this.cantidadPreguntasI == 6) {
      this.pregunta6 = dataExtraer.getPregunta6();
      this.correcta6 = dataExtraer.getCorrecta6();
      this.eleccion6 = dataExtraer.getEleccion6();
      this.eleccionTexto6 = dataExtraer.getEleccionTexto6();
      this.correctaTexto6 = dataExtraer.getCorrectaTexto6();
      if(this.correcta6 == "1"){
        this.correctaTexto6 = dataExtraer.getRespuesta21();
      }if(this.correcta6 == "2"){
        this.correctaTexto6 = dataExtraer.getRespuesta22();
      }if(this.correcta6 == "3"){
        this.correctaTexto6 = dataExtraer.getRespuesta23();
      }if(this.correcta6 == "4"){
        this.correctaTexto6 = dataExtraer.getRespuesta24();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
      this.eleccionResultados4()
      this.eleccionResultados5()
      this.eleccionResultados6()
    }//Eleccion7
    else if (this.cantidadPreguntasI == 7) {
      this.pregunta7 = dataExtraer.getPregunta7();
      this.correcta7 = dataExtraer.getCorrecta7();
      this.eleccion7 = dataExtraer.getEleccion7();
      this.eleccionTexto7 = dataExtraer.getEleccionTexto7();
      this.correctaTexto7 = dataExtraer.getCorrectaTexto7();
      if(this.correcta7 == "1"){
        this.correctaTexto7 = dataExtraer.getRespuesta25();
      }if(this.correcta7 == "2"){
        this.correctaTexto7 = dataExtraer.getRespuesta26();
      }if(this.correcta7 == "3"){
        this.correctaTexto7 = dataExtraer.getRespuesta27();
      }if(this.correcta7 == "4"){
        this.correctaTexto7 = dataExtraer.getRespuesta28();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
      this.eleccionResultados4()
      this.eleccionResultados5()
      this.eleccionResultados6()
      this.eleccionResultados7()
    }//Eleccion8
    else if (this.cantidadPreguntasI == 8) {
      this.pregunta8 = dataExtraer.getPregunta8();
      this.correcta8 = dataExtraer.getCorrecta8();
      this.eleccion8 = dataExtraer.getEleccion8();
      this.eleccionTexto8 = dataExtraer.getEleccionTexto8();
      this.correctaTexto8 = dataExtraer.getCorrectaTexto8();
      if(this.correcta8 == "1"){
        this.correctaTexto8 = dataExtraer.getRespuesta29();
      }if(this.correcta8 == "2"){
        this.correctaTexto8 = dataExtraer.getRespuesta30();
      }if(this.correcta8 == "3"){
        this.correctaTexto8 = dataExtraer.getRespuesta31();
      }if(this.correcta8 == "4"){
        this.correctaTexto8 = dataExtraer.getRespuesta32();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
      this.eleccionResultados4()
      this.eleccionResultados5()
      this.eleccionResultados6()
      this.eleccionResultados7()
      this.eleccionResultados8()
    }//Eleccion9
    else if (this.cantidadPreguntasI == 9) {
      this.pregunta9 = dataExtraer.getPregunta9();
      this.correcta9 = dataExtraer.getCorrecta9();
      this.eleccion9 = dataExtraer.getEleccion9();
      this.eleccionTexto9 = dataExtraer.getEleccionTexto9();
      this.correctaTexto9 = dataExtraer.getCorrectaTexto9();
      if(this.correcta9 == "1"){
        this.correctaTexto9 = dataExtraer.getRespuesta33();
      }if(this.correcta9 == "2"){
        this.correctaTexto9 = dataExtraer.getRespuesta34();
      }if(this.correcta9 == "3"){
        this.correctaTexto9 = dataExtraer.getRespuesta35();
      }if(this.correcta9 == "4"){
        this.correctaTexto9 = dataExtraer.getRespuesta36();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
      this.eleccionResultados4()
      this.eleccionResultados5()
      this.eleccionResultados6()
      this.eleccionResultados7()
      this.eleccionResultados8()
      this.eleccionResultados9()
    }//Eleccion10
    else if (this.cantidadPreguntasI == 10) {
      this.pregunta10 = dataExtraer.getPregunta10();
      this.correcta10 = dataExtraer.getCorrecta10();
      this.eleccion10 = dataExtraer.getEleccion10();
      this.eleccionTexto10 = dataExtraer.getEleccionTexto10();
      this.correctaTexto10 = dataExtraer.getCorrectaTexto10();
      if(this.correcta10 == "1"){
        this.correctaTexto10 = dataExtraer.getRespuesta37();
      }if(this.correcta10 == "2"){
        this.correctaTexto10 = dataExtraer.getRespuesta38();
      }if(this.correcta10 == "3"){
        this.correctaTexto10 = dataExtraer.getRespuesta39();
      }if(this.correcta10 == "4"){
        this.correctaTexto10 = dataExtraer.getRespuesta40();
      }
      this.eleccionResultados1()
      this.eleccionResultados2()
      this.eleccionResultados3()
      this.eleccionResultados4()
      this.eleccionResultados5()
      this.eleccionResultados6()
      this.eleccionResultados7()
      this.eleccionResultados8()
      this.eleccionResultados9()
      this.eleccionResultados10()
    }
  }
    //Eleccion1
  public eleccionResultados1() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta1 = dataExtraer.getPregunta1();
    this.correcta1 = dataExtraer.getCorrecta1();
    this.eleccion1 = dataExtraer.getEleccion1();
    this.eleccionTexto1 = dataExtraer.getEleccionTexto1();
    this.correctaTexto1 = dataExtraer.getCorrectaTexto1();
    if (this.correcta1 == '1') {
      this.correctaTexto1 = dataExtraer.getRespuesta1();
    }
    if (this.correcta1 == '2') {
      this.correctaTexto1 = dataExtraer.getRespuesta2();
    }
    if (this.correcta1 == '3') {
      this.correctaTexto1 = dataExtraer.getRespuesta3();
    }
    if (this.correcta1 == '4') {
      this.correctaTexto1 = dataExtraer.getRespuesta4();
    }

    //Correcto
    console.log('Eleccion 1:' + dataExtraer.getEleccion1());
    console.log('Correcta 1:' + dataExtraer.getCorrecta1());
    if (this.eleccion1 == this.correcta1) {
      this.calculadoraCorrectas();
      this.check1 = 1;
      console.log('Check 1:' + this.check1);
    } //Incorrecto
    if (this.eleccion1 != this.correcta1) {
      this.calculadoraIncorrectas();
      this.check1 = 0;
      console.log('Check 1' + this.check1);
    }
  }


  //Eleccion2
  public eleccionResultados2() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta2 = dataExtraer.getPregunta2();
    this.correcta2 = dataExtraer.getCorrecta2();
    this.eleccion2 = dataExtraer.getEleccion2();
    this.eleccionTexto2 = dataExtraer.getEleccionTexto2();
    this.correctaTexto2 = dataExtraer.getCorrectaTexto2();
    if (this.correcta2 == '1') {
      this.correctaTexto2 = dataExtraer.getRespuesta5();
    }
    if (this.correcta2 == '2') {
      this.correctaTexto2 = dataExtraer.getRespuesta6();
    }
    if (this.correcta2 == '3') {
      this.correctaTexto2 = dataExtraer.getRespuesta7();
    }
    if (this.correcta2 == '4') {
      this.correctaTexto2 = dataExtraer.getRespuesta8();
    }

    //Correcto
    console.log('Eleccion 2:' + dataExtraer.getEleccion2());
    console.log('Correcta 2:' + dataExtraer.getCorrecta2());
    if (this.eleccion2 == this.correcta2) {
      this.calculadoraCorrectas();
      this.check2 = 1;
      console.log('Check 2:' + this.check2);
    } //Incorrecto
    if (this.eleccion2 != this.correcta2) {
      this.calculadoraIncorrectas();
      this.check2 = 0;
      console.log('Check 2' + this.check2);
    }
  }

  //Eleccion3
  public eleccionResultados3() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta3 = dataExtraer.getPregunta3();
    this.correcta3 = dataExtraer.getCorrecta3();
    this.eleccion3 = dataExtraer.getEleccion3();
    this.eleccionTexto3 = dataExtraer.getEleccionTexto3();
    this.correctaTexto3 = dataExtraer.getCorrectaTexto3();
    if (this.correcta3 == '1') {
      this.correctaTexto3 = dataExtraer.getRespuesta9();
    }
    if (this.correcta3 == '2') {
      this.correctaTexto3 = dataExtraer.getRespuesta10();
    }
    if (this.correcta3 == '3') {
      this.correctaTexto3 = dataExtraer.getRespuesta11();
    }
    if (this.correcta3 == '4') {
      this.correctaTexto3 = dataExtraer.getRespuesta12();
    }

    //Correcto
    console.log('Eleccion 3:' + dataExtraer.getEleccion3());
    console.log('Correcta 3:' + dataExtraer.getCorrecta3());
    if (this.eleccion3 == this.correcta3) {
      this.calculadoraCorrectas();
      this.check3 = 1;
      console.log('Check 3:' + this.check3);
    } //Incorrecto
    if (this.eleccion3 != this.correcta3) {
      this.calculadoraIncorrectas();
      this.check3 = 0;
      console.log('Check 3' + this.check3);
    }
  }


  //Eleccion4
  public eleccionResultados4() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta4 = dataExtraer.getPregunta4();
    this.correcta4 = dataExtraer.getCorrecta4();
    this.eleccion4 = dataExtraer.getEleccion4();
    this.eleccionTexto4 = dataExtraer.getEleccionTexto4();
    this.correctaTexto4 = dataExtraer.getCorrectaTexto4();
    if (this.correcta4 == '1') {
      this.correctaTexto4 = dataExtraer.getRespuesta13();
    }
    if (this.correcta4 == '2') {
      this.correctaTexto4 = dataExtraer.getRespuesta14();
    }
    if (this.correcta4 == '3') {
      this.correctaTexto4 = dataExtraer.getRespuesta15();
    }
    if (this.correcta4 == '4') {
      this.correctaTexto4 = dataExtraer.getRespuesta16();
    }

    //Correcto
    console.log('Eleccion 4:' + dataExtraer.getEleccion4());
    console.log('Correcta 4:' + dataExtraer.getCorrecta4());
    if (this.eleccion4 == this.correcta4) {
      this.calculadoraCorrectas();
      this.check4 = 1;
      console.log('Check 4:' + this.check4);
    } //Incorrecto
    if (this.eleccion4 != this.correcta4) {
      this.calculadoraIncorrectas();
      this.check4 = 0;
      console.log('Check 4' + this.check4);
    }
  }

  //Eleccion5
  public eleccionResultados5() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta5 = dataExtraer.getPregunta5();
    this.correcta5 = dataExtraer.getCorrecta5();
    this.eleccion5 = dataExtraer.getEleccion5();
    this.eleccionTexto5 = dataExtraer.getEleccionTexto5();
    this.correctaTexto5 = dataExtraer.getCorrectaTexto5();
    if (this.correcta5 == '1') {
      this.correctaTexto5 = dataExtraer.getRespuesta17();
    }
    if (this.correcta5 == '2') {
      this.correctaTexto5 = dataExtraer.getRespuesta18();
    }
    if (this.correcta5 == '3') {
      this.correctaTexto5 = dataExtraer.getRespuesta19();
    }
    if (this.correcta5 == '4') {
      this.correctaTexto5 = dataExtraer.getRespuesta20();
    }

    //Correcto
    console.log('Eleccion 5:' + dataExtraer.getEleccion5());
    console.log('Correcta 5:' + dataExtraer.getCorrecta5());
    if (this.eleccion5 == this.correcta5) {
      this.calculadoraCorrectas();
      this.check5 = 1;
      console.log('Check 5:' + this.check5);
    } //Incorrecto
    if (this.eleccion5 != this.correcta5) {
      this.calculadoraIncorrectas();
      this.check5 = 0;
      console.log('Check 5' + this.check5);
    }
  }

  //Eleccion6
  public eleccionResultados6() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta6 = dataExtraer.getPregunta6();
    this.correcta6 = dataExtraer.getCorrecta6();
    this.eleccion6 = dataExtraer.getEleccion6();
    this.eleccionTexto6 = dataExtraer.getEleccionTexto6();
    this.correctaTexto6 = dataExtraer.getCorrectaTexto6();
    if (this.correcta6 == '1') {
      this.correctaTexto6 = dataExtraer.getRespuesta21();
    }
    if (this.correcta6 == '2') {
      this.correctaTexto6 = dataExtraer.getRespuesta22();
    }
    if (this.correcta6 == '3') {
      this.correctaTexto6 = dataExtraer.getRespuesta23();
    }
    if (this.correcta6 == '4') {
      this.correctaTexto6 = dataExtraer.getRespuesta24();
    }

    //Correcto
    console.log('Eleccion 6:' + dataExtraer.getEleccion6());
    console.log('Correcta 6:' + dataExtraer.getCorrecta6());
    if (this.eleccion6 == this.correcta6) {
      this.calculadoraCorrectas();
      this.check6 = 1;
      console.log('Check 6:' + this.check6);
    } //Incorrecto
    if (this.eleccion6 != this.correcta6) {
      this.calculadoraIncorrectas();
      this.check6 = 0;
      console.log('Check 6' + this.check6);
    }
  }

  //Eleccion7
  public eleccionResultados7() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta7 = dataExtraer.getPregunta7();
    this.correcta7 = dataExtraer.getCorrecta7();
    this.eleccion7 = dataExtraer.getEleccion7();
    this.eleccionTexto7 = dataExtraer.getEleccionTexto7();
    this.correctaTexto7 = dataExtraer.getCorrectaTexto7();
    if (this.correcta7 == '1') {
      this.correctaTexto7 = dataExtraer.getRespuesta25();
    }
    if (this.correcta7 == '2') {
      this.correctaTexto7 = dataExtraer.getRespuesta26();
    }
    if (this.correcta7 == '3') {
      this.correctaTexto7 = dataExtraer.getRespuesta27();
    }
    if (this.correcta7 == '4') {
      this.correctaTexto7 = dataExtraer.getRespuesta28();
    }

    //Correcto
    console.log('Eleccion 7:' + dataExtraer.getEleccion7());
    console.log('Correcta 7:' + dataExtraer.getCorrecta7());
    if (this.eleccion7 == this.correcta7) {
      this.calculadoraCorrectas();
      this.check7 = 1;
      console.log('Check 7:' + this.check7);
    } //Incorrecto
    if (this.eleccion7 != this.correcta7) {
      this.calculadoraIncorrectas();
      this.check7 = 0;
      console.log('Check 7' + this.check7);
    }
  }

  //Eleccion8
  public eleccionResultados8() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta8 = dataExtraer.getPregunta8();
    this.correcta8 = dataExtraer.getCorrecta8();
    this.eleccion8 = dataExtraer.getEleccion8();
    this.eleccionTexto8 = dataExtraer.getEleccionTexto8();
    this.correctaTexto8 = dataExtraer.getCorrectaTexto8();
    if (this.correcta8 == '1') {
      this.correctaTexto8 = dataExtraer.getRespuesta29();
    }
    if (this.correcta8 == '2') {
      this.correctaTexto8 = dataExtraer.getRespuesta30();
    }
    if (this.correcta8 == '3') {
      this.correctaTexto8 = dataExtraer.getRespuesta31();
    }
    if (this.correcta8 == '4') {
      this.correctaTexto8 = dataExtraer.getRespuesta32();
    }

    //Correcto
    console.log('Eleccion 8:' + dataExtraer.getEleccion8());
    console.log('Correcta 8:' + dataExtraer.getCorrecta8());
    if (this.eleccion8 == this.correcta8) {
      this.calculadoraCorrectas();
      this.check8 = 1;
      console.log('Check 8:' + this.check8);
    } //Incorrecto
    if (this.eleccion8 != this.correcta8) {
      this.calculadoraIncorrectas();
      this.check8 = 0;
      console.log('Check 8' + this.check8);
    }
  }

   //Eleccion9
   public eleccionResultados9() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta9 = dataExtraer.getPregunta9();
    this.correcta9 = dataExtraer.getCorrecta9();
    this.eleccion9 = dataExtraer.getEleccion9();
    this.eleccionTexto9 = dataExtraer.getEleccionTexto9();
    this.correctaTexto9 = dataExtraer.getCorrectaTexto9();
    if (this.correcta9 == '1') {
      this.correctaTexto9 = dataExtraer.getRespuesta33();
    }
    if (this.correcta9 == '2') {
      this.correctaTexto9 = dataExtraer.getRespuesta34();
    }
    if (this.correcta9 == '3') {
      this.correctaTexto9 = dataExtraer.getRespuesta35();
    }
    if (this.correcta9 == '4') {
      this.correctaTexto9 = dataExtraer.getRespuesta36();
    }

    //Correcto
    console.log('Eleccion 9:' + dataExtraer.getEleccion9());
    console.log('Correcta 9:' + dataExtraer.getCorrecta9());
    if (this.eleccion9 == this.correcta9) {
      this.calculadoraCorrectas();
      this.check9 = 1;
      console.log('Check 9:' + this.check9);
    } //Incorrecto
    if (this.eleccion9 != this.correcta9) {
      this.calculadoraIncorrectas();
      this.check9 = 0;
      console.log('Check 9' + this.check9);
    }
  }

  //Eleccion10
  public eleccionResultados10() {
    //Extraer las respuestas
    var dataExtraer = new EstiloPreguntas();
    //Asignacion de valores
    //this.asignacionValores();

    this.pregunta10 = dataExtraer.getPregunta10();
    this.correcta10 = dataExtraer.getCorrecta10();
    this.eleccion10 = dataExtraer.getEleccion10();
    this.eleccionTexto10 = dataExtraer.getEleccionTexto10();
    this.correctaTexto10 = dataExtraer.getCorrectaTexto10();
    if (this.correcta10 == '1') {
      this.correctaTexto10 = dataExtraer.getRespuesta37();
    }
    if (this.correcta10 == '2') {
      this.correctaTexto10 = dataExtraer.getRespuesta38();
    }
    if (this.correcta10 == '3') {
      this.correctaTexto10 = dataExtraer.getRespuesta39();
    }
    if (this.correcta10 == '4') {
      this.correctaTexto10 = dataExtraer.getRespuesta40();
    }

    //Correcto
    console.log('Eleccion 10:' + dataExtraer.getEleccion10());
    console.log('Correcta 10:' + dataExtraer.getCorrecta10());
    if (this.eleccion10 == this.correcta10) {
      this.calculadoraCorrectas();
      this.check10 = 1;
      console.log('Check 10:' + this.check10);
    } //Incorrecto
    if (this.eleccion10 != this.correcta10) {
      this.calculadoraIncorrectas();
      this.check10 = 0;
      console.log('Check 10' + this.check10);
    }
  }


  //Calculadoras de resulados de una pregunta
  public calculadoraCorrectas() {
    this.restuladosCorrectos++;
  }

  public calculadoraIncorrectas() {
    this.resultadosIncorrectos++;
  }
  //Fin Calculadoras de resulados de una pregunta

  public listo() {
    this.router.navigateByUrl('inicio');
    var borrarRespuestas = new borrarRespuestas();
    borrarRespuestas();
    //Colocar un boton que reeinicie los valores de los resultados
  }
  ngOnInit() {}
}
