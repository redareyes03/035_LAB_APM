import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresupuestoPagePage } from './presupuesto-page.page';

describe('PresupuestoPagePage', () => {
  let component: PresupuestoPagePage;
  let fixture: ComponentFixture<PresupuestoPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresupuestoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
