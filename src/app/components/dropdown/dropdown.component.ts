import { Component } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  dropdownItems = [
    {
      label: 'Profile',
      route: '',
      icon: null,
    },
    {
      label: 'Settings',
      route: '',
      icon: null,
    },
    {
      label: 'Logout',
      route: '/login',
      icon: null,
    },
  ];

  viewDropdown = false;

  handleDropdown() {
    this.viewDropdown = !this.viewDropdown;
  }
}
