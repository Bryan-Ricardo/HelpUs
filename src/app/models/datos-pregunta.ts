export class DatosPregunta{
    id:number
    nombre:string 
    cantidadPreguntas: number
    mostrar: boolean
    preguntas:any[]



    constructor(

        )
    {

    }

    public setNombre(titulo){
        this.nombre = titulo;
        localStorage.setItem("titulo",titulo);
    }
    public getNombre(){
        return this.nombre;
    }
    public getNombreLocalHost(){
        return localStorage.getItem("titulo");
    }
    public setCantidadPreguntas(cantidadPreguntas){
        this.cantidadPreguntas = cantidadPreguntas;
        localStorage.setItem("cantidadPreguntas:",cantidadPreguntas);
    }
    public getCantidadPreguntas(){
        return this.cantidadPreguntas;
    }
    public getCantidadPreguntasLocalHost(){
        return JSON.parse(localStorage.getItem("cantidadPreguntas:"));
    }
    public setId(id : number){
         this.id = id
         var idString = id.toString();
        localStorage.setItem("id: ",idString);
    }

    public getId(){
        return localStorage.item(this.id);
   }

}