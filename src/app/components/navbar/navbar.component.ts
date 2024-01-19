import { Component } from '@angular/core';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navItens: Array<NavItem> = [
    {
      label: 'Home',
      route: '/home',
    },
    {
      label: 'Log',
      route: '/log',
    },
    {
      label: 'Settings',
      route: '/settings',
    },
    {
      label: 'About',
      route: '/about',
    },
  ];
}
