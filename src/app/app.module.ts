import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeroesModule } from './heroes/heroes.module';
import { CitiesModule } from './cities/cities.module';
import { AppRoutingModule } from './app-routing.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
],
  imports: [
    BrowserModule,
    CitiesModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
