import { Component, OnInit } from '@angular/core';
import {Persona } from '../Persona';
import {ListaService} from '../lista.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  displayedColumns: string[]=['nombre', 'puntos', 'incrementar', 'eliminar'];
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
    console.log ('Voy a mostrar');
    this.lista = this.servicioLista.Mostrar();
    console.log ('mostrado');

  }

  Incrementar(nombre: string){
    this.lista= this.servicioLista.Incrementar(nombre);
  }

  Eliminarpersona(nombre:string){
    this.lista=this.servicioLista.Eliminarpersona(nombre);
  }

  Ordenarpuntos(){
    console.log ('voy a ordenar');
    this.lista=this.servicioLista.Ordenarpuntos();
    this.lista=this.servicioLista.Eliminarpersona("blanco");
    console.log ('ordenado');
  }

  Pon(){
    this.lista= this.servicioLista.PonPersona(new Persona(this.nombre, this.pass, this.rol, this.puntos));
    this.lista=this.servicioLista.Eliminarpersona("blanco");
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
