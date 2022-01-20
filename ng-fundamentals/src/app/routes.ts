import { Routes } from "@angular/router";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventRouteActivator } from "./events/router-activator/event-route-activator";
import { UserModule } from "./user/user.module";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate : ["canDeactiveCreateEvent"]},
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate : [EventRouteActivator] },
    { path: '404', component : ErrorPageComponent},
    { path: '', redirectTo: '/events', pathMatch: 'full' }, 
    {
        path : 'user',
        loadChildren: () => import('./user/user.module').then(m => UserModule)
    }
]