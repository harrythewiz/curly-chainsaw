import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { VaccineComponent } from './components/vaccine/vaccine.component';

const routes: Routes = [
  { path: 'firebase', component: FirebaseComponent },
  { path: 'vaccine', component: VaccineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }