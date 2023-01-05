import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { ExercisesComponent } from './exercises.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ExercisesComponent
  },
  {
    path: 'add',
    component: AdditionComponent
  },
  {
    path: 'subtract',
    component: SubtractionComponent
  },
  {
    path: 'multiply',
    component: MultiplicationComponent
  },
  {
    path: 'divide',
    component: DivisionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class ExercisesRoutingModule {}
