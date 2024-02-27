import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje';
import { ConsultaApiService } from 'src/app/services/consulta-api-personajes.service';
@Component({
  selector: 'app-paso1',
  templateUrl: './paso1.page.html',
})
export class Paso1Page {

  user: Personaje = {name:'Pedro Perez object', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: Personaje[]=
  [
    {name:'Pedro Perez 1', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 2', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 3', uuid:"34523452345234523452345", email:"correo@gmail.com"}
  ];

  constructor(
    private envioReceptor: ConsultaApiService,
    private router: Router
    ) { }



  redireccionReceptor(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/paso2']);
  }

}
