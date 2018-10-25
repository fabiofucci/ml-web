import {Component} from '@angular/core';
import {NotificationService, NotificationType} from '../service/notificationservice';

@Component({
  selector: 'app-component-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent {
  message: string;

  constructor(private _notificationService: NotificationService) {
    this._notificationService.$notification.subscribe(notification => {
      switch (notification.type) {
        case NotificationType.ERROR:
          this.message = notification.message;
      }
    });
  }

  close() {
    this.message = null;
  }
}
