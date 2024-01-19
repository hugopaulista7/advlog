import { Component } from '@angular/core';

@Component({
  selector: 'notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss'],
})
export class NotificationButtonComponent {
  isBellActive = false;

  handleBellStateEnter() {
    this.isBellActive = true;
  }
  handleBellStateLeave() {
    this.isBellActive = false;
  }
}
