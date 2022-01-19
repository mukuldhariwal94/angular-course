import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public event1 = {
    id : 1, 
    name: 'Angular connect',
    date: '10/10', 
    price: 10
  }
  constructor() { }

  ngOnInit(): void {
  }
}
