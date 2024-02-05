import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  menu = [
    {
      name: 'Dashboard',
      icon: 'heroChartPieSolid',
      link: '/dashboard',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  isRouteActive(route: string) {
    let url = this.route.snapshot.url;
    console.log('url: ', url);
    return true;
  }
}
