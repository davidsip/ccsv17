import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { MinistriesComponent } from './ministries.component';
import { ContactUsComponent } from './contact-us.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MinistriesComponent,
    ContactUsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
