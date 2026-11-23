import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class NotificationList {
  show = signal(false);
  notifications = signal<{ message: string }[]>([
    { message: 'Une nouvelle conférence est disponible.' },
    { message: 'Sami vous a envoyé une invitation.' },
  ]);
}