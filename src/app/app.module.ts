import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CarsModule } from './cars/cars.module';
import { BikeModule } from './bikes/bike.module';
import { ShipsComponent } from './ships/ships.component';
import { ShipsModule } from './ships/ships.module';
import { BikeRouterModule } from './bikes/bike.routermodule';



@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    CarsModule,
    BikeModule,
    ShipsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
