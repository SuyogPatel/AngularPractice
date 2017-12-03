import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CarsModule } from './cars/cars.module';
import { BikeModule } from './bikes/bike.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    CarsModule,
    BikeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
