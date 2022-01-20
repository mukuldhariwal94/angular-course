import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { EventService } from "src/app/shared/event.service";

@Injectable()

export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot) {
        let eventId = route.params['id'];
        const eventExists = !!this.eventService.getEvent(+eventId);
        if(!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    }
}