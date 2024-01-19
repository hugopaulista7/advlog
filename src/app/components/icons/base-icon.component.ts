import { Component, Input } from '@angular/core';

@Component({
  selector: 'base-icon',
  template: '',
})
export abstract class BaseIconComponent {
  @Input() size = '';

  get iconSize(): string {
    if (this.size == 'sm') {
      return 'w-2 h-2';
    }
    if (this.size == 'md') {
      return 'w-4 h-4';
    }

    if (this.size == 'lg') {
      return 'w-6 h-6';
    }

    return 'w-4 h-4';
  }
}
