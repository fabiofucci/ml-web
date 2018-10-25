import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export enum NotificationType {
  ERROR = 0,
  WARNING = 1,
  INFO = 2
}

export class Notification {
  type: NotificationType;
  message: string;


  constructor(type: number, message: string) {
    this.type = type;
    this.message = message;
  }
}

@Injectable({providedIn: 'root'})
export class NotificationService {

  public $notification = new Subject<Notification>();

  error(message: string) {
    this.$notification.next(new Notification(NotificationType.ERROR, message));
  }
}
