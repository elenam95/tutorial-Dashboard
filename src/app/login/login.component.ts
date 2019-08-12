import { Component, OnInit } from '@angular/core';
import {ListaService} from '../lista.service';
import { Persona } from '../Persona';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string;
  pass: string;

  constructor(private servicioLista: ListaService) { }

  ngOnInit() {
  }

  Autentificar(){
    let persona :Persona; 
    persona= this.servicioLista.Autentificar(this.nombre, this.pass);
    if (persona != null){
      if (persona.rol=== 'Profesor'){
        // Indica que direccione a la pagina profesor 
        window.location.href='/profesor';
      }
      else{
        window.location.href='/alumno/' + persona.nombre;
      }
    }
  }

}
