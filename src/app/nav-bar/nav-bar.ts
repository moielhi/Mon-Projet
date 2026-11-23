import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
links = signal([
  { name: 'Accueil', path: '/home' },
  { name: 'Profil', path: '/Profile' },
  { name: 'Conférences', path: '/Confs' },
  { name: 'Amis', path: '/Friends' },
  { name: 'Détail', path: '/Detail' },
  { name: 'Notifications', path: '/Notif' }
]);
}