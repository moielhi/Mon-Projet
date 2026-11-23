import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  imports: [],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  friends = signal<string[]>(['Sami', 'Ahmed', 'Sarra']);
}