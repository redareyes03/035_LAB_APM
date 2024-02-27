import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/interfaces/receta';
import { RecetaService } from 'src/app/services/receta.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html'
})
export class RecetasPage implements OnInit {

  public recetas: Receta[] = [];
  public recetaService: RecetaService

  constructor(recetaService: RecetaService) { 
    this.recetaService = recetaService;
  }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
