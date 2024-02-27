import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Personaje } from 'src/app/interfaces/personaje';
import { ConsultaApiService } from 'src/app/services/consulta-api-personajes.service';

@Component({
  selector: 'app-paso2',
  templateUrl: './paso2.page.html',
})
export class Paso2Page implements OnInit {
  user: Personaje = {};
  list: Personaje[] = [];
  personajes: Personaje[] = [];
  subcriptionObject: Subscription = new Subscription();
  subcriptionObjectList: Subscription = new Subscription();

  constructor(private consultaApiService: ConsultaApiService) {}

  ngOnInit() {
    this.consultaApiService.$getObjectSource
      .subscribe((data) => {
        console.log(data);
        this.user = data;
      })
      .unsubscribe();

    this.consultaApiService.$getListSource
      .subscribe((data) => {
        console.log(data);
        this.list = data;
      })
      .unsubscribe();

    this.consultaApiService.getPersonajes().subscribe((response: any) => {
      this.personajes = response.results;
    });
  }
}
