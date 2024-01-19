import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmailIconComponent } from './email.icon.component';
import { PasswordIconComponent } from './password.icon.component';
import { UserIconComponent } from './user.icon.component';
import { TagIconComponent } from './tag.icon.component';
import { BellIconComponent } from './bell.icon.component';
import { BellActiveIconComponent } from './bell-active.icon.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    EmailIconComponent,
    PasswordIconComponent,
    UserIconComponent,
    TagIconComponent,
    BellIconComponent,
    BellActiveIconComponent,
  ],
  exports: [
    EmailIconComponent,
    PasswordIconComponent,
    UserIconComponent,
    TagIconComponent,
    BellIconComponent,
    BellActiveIconComponent,
  ],
})
export class IconsModule {}
