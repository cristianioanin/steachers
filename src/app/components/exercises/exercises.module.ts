import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { DivisionComponent } from './division/division.component';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MathOperationBaseComponent } from './math-operation-base/math-operation-base.component';

const COMPONENTS = [
  AdditionComponent,
  DivisionComponent,
  ExercisesComponent,
  MultiplicationComponent,
  SubtractionComponent,
  MathOperationBaseComponent
];

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule {}
