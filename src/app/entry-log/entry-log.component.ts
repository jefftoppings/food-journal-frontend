import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

interface FoodEntry {
  name: string;
  date: Date;
  comments: string;
}

@Component({
  selector: 'app-entry-log',
  templateUrl: './entry-log.component.html',
  styleUrls: ['./entry-log.component.scss']
})
export class EntryLogComponent implements OnInit {

  entries$: Observable<FoodEntry[]>;

  constructor() {
  }

  ngOnInit() {
    // TODO replace this with real data
    this.entries$ = of([
      {
        name: 'Banana',
        date: new Date(),
        comments: 'It was a nice banana'
      },
      {
        name: 'Toast',
        date: new Date(),
        comments: 'With peanut butter and jelly'
      },
      {
        name: 'Granola Bar',
        date: new Date(),
        comments: 'A nice oat-filled granola bar with chocolate chips'
      },
    ]);
  }

}
