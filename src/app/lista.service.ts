import { Injectable } from '@angular/core';
import {Persona} from './Persona';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  lista: Persona[] = []; //declaramos una lista de personas vacias
  constructor() {
    this.lista[0] = new Persona ('Juan','JJJ','Profesor',0);
    this.lista[1] = new Persona ('Pedro','ppp','Alumno',0);
    this.lista[2] = new Persona ('María','mmm','Profesor',0);
    this.lista[3] = new Persona ('Lucas','lll','Alumno',0);
    this.lista[4] = new Persona ('Salva','sss','Alumno',0);
    this.lista[5] = new Persona ('Rocio','rrr','Alumno',0);
   }

   Mostrar (): Persona[]{
     return this.lista;
   }
   Incrementar(nombre: string): Persona[]{
    this.lista.filter(persona => persona.nombre=== nombre)[0].puntos ++;
    return this.lista;
  }

   Eliminarpersona (nombre:string): Persona[]{
      this.lista = this.lista.filter(persona=> persona.nombre !== nombre);
      return this.lista;
   }

   Ordenarpuntos(): Persona[]{
     this.lista= this.lista.sort(   //funcion para ordenar 
       function(obj1,obj2){
         return obj2.puntos-obj1.puntos;
       })
       return this.lista;

   }

   PonPersona (persona: Persona):Persona[]{
     this.lista.push(persona); //funcion que añade a la persona 
     return this.lista; 
   }

   Ordenaralfabeticamente():Persona[]{
    this.lista=this.lista.sort( 
      function(obj1,obj2)  {
        return obj1.nombre.localeCompare(obj2.nombre);
      })

    return this.lista;
   }

   Autentificar(nombre: string, pass: string): Persona{
      let user: Persona[]=[];
      user= this.lista.filter(persona=> persona.nombre==nombre && persona.pass== pass);

      if (user.length === 0)
      {
        console.log("no existe este usuario");
        return null;
        
      }
      else
      {
        console.log("existe este usuario");
        return user[0]; 
      }

   }

   PonPass(nombre: string, pass: string){
      this.lista.filter(persona=> persona.nombre === nombre)[0].pass= pass;
   }

   DamePersona(nombre: string): Persona{
     return this.lista.filter(persona => persona.nombre === nombre)[0];
   }
}
