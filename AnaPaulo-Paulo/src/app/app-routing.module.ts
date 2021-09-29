import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerimoniaComponent } from './cerimonia/cerimonia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'cerimonia', component: CerimoniaComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
