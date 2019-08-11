import { Component, OnInit } from '@angular/core';
import {Persona } from '../Persona';
import {ListaService} from '../lista.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  lista: Persona[] = []; //declaramos una lista de personas vacias
  contador= 0;
  nombre: string;
  pass: string;
  rol:string;
  puntos: number;
  constructor(private servicioLista: ListaService) { }

  ngOnInit() {
  }

  Mostrar(){
    this.lista = this.servicioLista.Mostrar();
  }

  Incrementar(nombre: string){
    this.lista= this.servicioLista.Incrementar(nombre);
  }

  Eliminarpersona(nombre:string){
    this.lista=this.servicioLista.Eliminarpersona(nombre);
  }

  Ordenarpuntos(){
    this.lista=this.servicioLista.Ordenarpuntos();
  }

  Pon(){
    this.lista= this.servicioLista.PonPersona(new Persona(this.nombre, this.pass, this.rol, this.puntos));
  }

  Ordenaralfabeticamente(){
    this.lista=this.servicioLista.Ordenaralfabeticamente();
  }

 /* Resetearpuntos(){
    
    for (this.contador=0; this.contador <this.lista.length; this.contador++){
      this.lista[this.contador].puntos =0; 
    }
  }
  Resetearpuntos () {
    this.lista.forEach(function (alumno) {
      alumno.puntos = 0;
    });
  }*/

}
