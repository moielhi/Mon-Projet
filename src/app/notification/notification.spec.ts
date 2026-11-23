import { Component } from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  titre = signal('Zone de notifications');
  notifications = signal([
    {'message': 'Ryan a pété avec ses mains'},
    {'message': 'Aziz est perdu dans les nuages.'}
  ]);
  show = signal(false);
  bntTxt = 'Afficher les notifications';
  ShowNotifications() {
    this.show.set(!this.show());
    this.bntTxt = this.show() ? 'Masquer les notifications' : 'Afficher les notifications';
  }
}