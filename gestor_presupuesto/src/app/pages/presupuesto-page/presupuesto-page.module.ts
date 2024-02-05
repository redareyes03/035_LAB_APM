import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresupuestoPagePageRoutingModule } from './presupuesto-page-routing.module';

import { PresupuestoPagePage } from './presupuesto-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresupuestoPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PresupuestoPagePage]
})
export class PresupuestoPagePageModule {}
