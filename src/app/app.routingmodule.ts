import { Routes , RouterModule} from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BikesComponent } from './bikes/bikes.component';
import { ShipsComponent } from './ships/ships.component';
import { CarsComponent } from './cars/cars.component';

const myroutes : Routes = [
    { path : '' , component : BikesComponent},
    { path : 'bike' , component  :  BikesComponent},
    { path : 'car' , component  :  CarsComponent},
    { path : 'ship' , component  :  ShipsComponent}
]


@NgModule({

    imports: [RouterModule.forRoot(myroutes)],
    exports:[ RouterModule]
})
export class AppRoutingModule{
    
}