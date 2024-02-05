import { Injectable } from '@angular/core';
import { Gasto } from '../interfaces/gasto';

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  public gastos: Gasto[] = [];
  public presupuesto: number = 1000;
  constructor() {}

  public agregarGasto(gasto: Gasto) {
    this.gastos.push(gasto);
    this.presupuesto -= gasto.cantidad;
  }

  public eliminarGasto(gasto: Gasto) {
    this.gastos = this.gastos.filter((gastoSeleccionado) => gastoSeleccionado.id !== gasto.id);
    this.presupuesto += gasto.cantidad;
  }
}
