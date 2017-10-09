import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { MinistriesComponent } from './ministries.component';
import { ContactUsComponent } from './contact-us.component';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'ministries', component: MinistriesComponent},
  { path: 'events', component: EventsComponent},
  { path: 'contact-us', component: ContactUsComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
