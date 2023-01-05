import { Component } from '@angular/core';
import { INavbarItem } from '../../core/interfaces';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {
  readonly operationsRoutes: INavbarItem[] = [
    {
      name: 'Adunări',
      routerLink: 'add'
    },
    {
      name: 'Scăderi',
      routerLink: 'subtract'
    },
    {
      name: 'Înmulțiri',
      routerLink: 'multiply'
    },
    {
      name: 'Împărțiri',
      routerLink: 'divide'
    }
  ];
}
