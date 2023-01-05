import { Component } from '@angular/core';
import { INavbarItem } from '../../core/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  readonly navbarItems: INavbarItem[] = [
    // {
    //   name: 'Acasă',
    //   routerLink: '#'
    // },
    {
      name: 'Exerciții',
      routerLink: 'exercises'
    },
    // {
    //   name: 'Statistici',
    //   routerLink: '#'
    // }
  ];
}
