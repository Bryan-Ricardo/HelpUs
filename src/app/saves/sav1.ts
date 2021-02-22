export class Save1{

    respuesta1: string;
    respuesta2: string;
    respuesta3: string;
    respuesta4: string;
    correcta1: string;
    correcta2: string;
    pregunta1: string;

     constructor(pregunta1, respuesta1, respuesta2, respuesta3, respuesta4, correcta1) {
        console.log('Guardado 1');
        //asignacion de la pregunta
        this.pregunta1 = pregunta1;
        console.log(this.pregunta1);
        //asignacion de las 4respuestas
        this.respuesta1 = respuesta1;
        this.respuesta2 = respuesta2;
        this.respuesta3 = respuesta3;
        this.respuesta4 = respuesta4;
        console.log(this.respuesta1);
        console.log(this.respuesta2);
        console.log(this.respuesta3);
        console.log(this.respuesta4);
        //asignacion de la respuesta correcta
        this.correcta1 = correcta1;
        console.log(this.correcta1);
      }

}