import { Component } from '@angular/core';
import { BaseIconComponent } from './base-icon.component';

@Component({
  selector: 'icon-password',
  template: `<svg
    class="{{ iconSize }} text-gray-500 "
    fill="currentColor"
    viewBox="0 0 16 20"
  >
    <path
      d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"
    />
  </svg>`,
})
export class PasswordIconComponent extends BaseIconComponent {}
