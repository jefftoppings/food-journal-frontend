import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.scss']
})
export class AddEntryComponent implements OnInit {
  currentDate: string = new Date().toString();

  constructor() { }

  ngOnInit() {
  }

}
