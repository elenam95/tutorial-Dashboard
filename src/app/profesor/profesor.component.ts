import { Component, OnInit } from '@angular/core';
import {Persona } from '../Persona';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  lista: Persona[] = []; //declaramos una lista de personas vacias
  contador= 0;
  constructor() { }

  ngOnInit() {
  }

  Mostrar(){
    this.lista[0] = new Persona ('Juan','JJJ','Profesor',0);
    this.lista[1] = new Persona ('Pedro','ppp','Alumno',0);
    this.lista[2] = new Persona ('María','mmm','Profesor',0);
    this.lista[3] = new Persona ('Lucas','lll','Alumno',0);
    this.lista[4] = new Persona ('Salva','sss','Alumno',0);
    this.lista[5] = new Persona ('Rocio','rrr','Alumno',0);
  }

  Incrementar(nombre: string){
    this.lista.filter(persona => persona.nombre=== nombre)[0].puntos ++;
  }

 /* Resetearpuntos(){
    
    for (this.contador=0; this.contador <this.lista.length; this.contador++){
      this.lista[this.contador].puntos =0; 
    }
  }*/
  Resetearpuntos () {
    this.lista.forEach(function (alumno) {
      alumno.puntos = 0;
    });
  }

}
