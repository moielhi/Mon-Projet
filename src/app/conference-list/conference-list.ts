import { Component, computed, signal } from '@angular/core';

export interface Conference {
  id: number;
  title: string;
  date: string;
  location: string;
  seats: number;
}

@Component({
  selector: 'app-conference-list',
  imports: [],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  search = signal('');

  conferences = signal<Conference[]>([
    { id: 1, title: 'Angular 21 Conference', date: '15/11/2027', location: 'Tunis', seats: 25 },
    { id: 2, title: 'Signals Workshop', date: '30/11/2027', location: 'Ariana', seats: 6 },
    { id: 3, title: 'Web Conference', date: '20/11/2027', location: 'Sousse', seats: 0 },
  ]);

  filtered = computed(() => {
    const term = this.search().toLowerCase().trim();
    return this.conferences().filter(c => c.title.toLowerCase().includes(term));
  });

  onSearch(event: Event) {
    this.search.set((event.target as HTMLInputElement).value);
  }

  register(conf: Conference) {
    if (conf.seats === 0) return;
    this.conferences.update(list =>
      list.map(c => (c.id === conf.id ? { ...c, seats: c.seats - 1 } : c))
    );
  }

  seatClass(conf: Conference) {
    if (conf.seats === 0) return 'btn-full';
    return conf.seats <= 10 ? 'btn-low' : 'btn-ok';
  }
}