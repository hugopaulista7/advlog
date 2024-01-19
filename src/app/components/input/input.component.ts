import { Component, Input } from '@angular/core';
import { InputType } from './types.input';

@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type = '';
  @Input() icon: string | null = null;
  @Input() label = '';
  @Input() placeholder = '';

  constructor() {}

  get inputType(): string {
    let types = Object.keys(InputType);
    if (!types.includes(this.type)) {
      return InputType.text;
    }

    return this.type;
  }
}
