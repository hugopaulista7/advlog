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
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgIconsModule } from '@ng-icons/core';

import { heroChartPieSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    IconsModule,
    RouterModule,
    NgIconsModule.withIcons({ heroChartPieSolid }),
  ],
  declarations: [
    CardComponent,
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    NavbarComponent,
    DropdownComponent,
    NotificationButtonComponent,
    SidebarComponent,
  ],
  exports: [
    CardComponent,
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    NavbarComponent,
    DropdownComponent,
    NotificationButtonComponent,
    SidebarComponent,
  ],
})
export class ComponentsModule {}
