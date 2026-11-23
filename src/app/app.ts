import { Component } from '@angular/core';
import { Header } from './header/header';
import { NavBar } from './nav-bar/nav-bar';
import { UserProfile } from './user-profile/user-profile';
import { FriendsList } from './friends-list/friends-list';
import { NotificationList } from './notification/notification';
import { ConferenceList } from './conference-list/conference-list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, NavBar, UserProfile, FriendsList, NotificationList, ConferenceList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}