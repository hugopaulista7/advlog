import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  danger = 'danger',
  success = 'success',
  light = 'light',
  dark = 'dark',
  warning = 'warning',
}

interface ButtonColors {
  primary: string;
  secondary: string;
  tertiary: string;
  dark: string;
  light: string;
  success: string;
  danger: string;
  warning: string;
}

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  private colors: ButtonColors = {
    primary:
      'text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5',
    secondary:
      'py-2.5 px-5   text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
    tertiary:
      'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
    dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
    light:
      'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
    success:
      'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
    danger:
      'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
    warning:
      'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900',
  };

  @Input() type: string = 'primary';
  @Input() text: string = '';

  @Output() onClick = new EventEmitter();

  get buttonClass() {
    let types = Object.keys(ButtonType);
    if (!types.includes(this.type)) {
      return ButtonType.primary;
    }

    return this.colors[this.type as keyof ButtonColors];
  }

  clicked() {
    this.onClick.emit();
  }
}
