import { Component, OnInit } from '@angular/core';
import {Persona} from '../Persona';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona : Persona; 
  constructor() { }

  ngOnInit() {
  }

  Mostrar(){
    console.log ('Entro a mostrar');
   // this.persona = new Persona ('Juan', 'JJJ', 'Profesor', 10);
    this.persona = new Persona ('Emilio', 'JJJ', 'Alumno', 20);
   /* if (this.persona.rol!= 'Alumno')
    {
      this.persona= null;
    } otra alternativa para hacer el ejercicio dentro de la función */

  }

}
