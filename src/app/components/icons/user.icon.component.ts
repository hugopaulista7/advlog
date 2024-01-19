import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
  selector: 'icon-user',
  template: `<svg
    class="{{ iconSize }} text-gray-500 "
    fill="currentColor"
    viewBox="0 0 14 18"
  >
    <path
      d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"
    />
  </svg>`,
})
export class UserIconComponent extends BaseIconComponent {}
