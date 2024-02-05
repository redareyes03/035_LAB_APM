import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gasto } from 'src/app/interfaces/gasto';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-presupuesto-page',
  templateUrl: './presupuesto-page.page.html',
  styleUrls: ['./presupuesto-page.page.scss'],
})
export class PresupuestoPagePage implements OnInit {
  presupuestoForm: FormGroup;
  gastos: Gasto[] = [];
  presupuesto: number;

  toastMessage: string = '';
  isToastVisible: boolean = false;
  constructor(private presupuestoService: PresupuestoService) {
    this.presupuestoForm = new FormGroup({
      gasto: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
    });
    this.gastos = this.presupuestoService.gastos;
    this.presupuesto = this.presupuestoService.presupuesto;
  }

  public submitForm() {
    if (this.presupuestoForm.valid) {
      if (this.presupuestoForm.value.cantidad > this.presupuesto) {
        this.mostrarToast('No tienes suficiente presupuesto');
        return;
      }
      this.presupuestoService.agregarGasto(this.presupuestoForm.value);
      this.presupuestoForm.reset();
      this.presupuesto = this.presupuestoService.presupuesto;
    }
  }

  public eliminarGasto(gasto: Gasto) {
    this.presupuestoService.eliminarGasto(gasto);
    this.presupuesto = this.presupuestoService.presupuesto;
    this.gastos = this.presupuestoService.gastos;
  }

  public mostrarToast(mensaje: string) {
    this.toastMessage = mensaje;
    this.isToastVisible = true;
  }

  ngOnInit(): void {
    console.log('PresupuestoPagePage');
    
  }
}
