import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: 'exercises',
    loadChildren: () => import('./components/exercises/exercises.module').then(m => m.ExercisesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule {}
