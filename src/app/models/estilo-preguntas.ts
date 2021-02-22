export class EstiloPreguntas{
    id:number
    pregunta:string 
    respuesta1:string
    respuesta2:string
    respuesta3:string
    respuesta4:string
    correcta:string


    constructor()
    {}

    public setId(id: number){
        this.id = id;
    }
    public getId(){
        return this.id;
    }
    public setPregunta(pregunta: string){
        this.pregunta = pregunta;
    }
    public getPregunta(){
        return this.pregunta;
    }
    public setRespuesta1(respuesta1: string){
        this.respuesta1 = respuesta1;
    }
    public getRespuesta1(){
        return this.respuesta1;
    }
    public setRespuesta2(respuesta2: string){
        this.respuesta2 = respuesta2;
    }
    public getRespuesta2(){
        return this.respuesta2;
    }    
    public setRespuesta3(respuesta3: string){
        this.respuesta3 = respuesta3;
    }
    public getRespuesta3(){
        return this.respuesta3;
    }    
    public setRespuesta4(respuesta4: string){
        this.respuesta4 = respuesta4;
    }
    public getRespuesta4(){
        return this.respuesta4;
    } 
    public setCorrecta(correcta: string){
        this.correcta = correcta;
    }
    public getCorrecta(){
        return this.correcta;
    }   

}