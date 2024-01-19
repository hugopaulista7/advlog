import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconsModule } from './icons/icons.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, BrowserModule, IconsModule, RouterModule],
  declarations: [
    CardComponent,
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    NavbarComponent,
    DropdownComponent,
    NotificationButtonComponent,
  ],
  exports: [
    CardComponent,
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    NavbarComponent,
    DropdownComponent,
    NotificationButtonComponent,
  ],
})
export class ComponentsModule {}
