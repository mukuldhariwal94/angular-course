import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';

declare let toastr: any; 
@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {
  events: any[] = []; 
  constructor(private eventService: EventService,) { 
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    Object.keys( 'asdasd' + window );

  }

  handleThumbnailClick(name: any)
  {
    toastr.success('test', 'tests')
  }
}
