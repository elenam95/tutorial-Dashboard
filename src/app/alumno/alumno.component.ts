import { Component, OnInit } from '@angular/core';
import {Persona} from '../Persona';
import {ListaService} from '../lista.service'; //para poder cambiar el pass
import {ActivatedRoute} from '@angular/router'; //LO NECESITO PARA RECOGER EL NOMBRE DE LA RUTA
import {Location } from '@angular/common'; // LO NECESITO PARA HACER EL BACK 

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno: Persona;
  nuevoPass: string;
  constructor(private servicioLista: ListaService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    //inicializacion del componente 
    const nombre = this.route.snapshot.paramMap.get('nombre');
    this.alumno=this.servicioLista.DamePersona(nombre);
  }

  Cambiarpass(){
    this.servicioLista.PonPass(this.alumno.nombre, this.nuevoPass);
  }

  GoBack(){ //funcion para ir hacia la pagina de atras
    this.location.back();
    // es necesario el import y una instancia: el private location en el constructor 
  }
}
