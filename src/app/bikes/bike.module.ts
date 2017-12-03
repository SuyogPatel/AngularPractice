
import { NgModule } from '@angular/core';
import { BikesComponent } from './bikes.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { DeletebikeComponent } from './deletebike/deletebike.component';
@NgModule({
    declarations : [BikesComponent,AddbikeComponent,DeletebikeComponent],
    exports : [BikesComponent]
})
export class BikeModule{

}