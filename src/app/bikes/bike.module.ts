
import { NgModule } from '@angular/core';
import { BikesComponent } from './bikes.component';
import { AddbikeComponent } from './addbike/addbike.component';
import { DeletebikeComponent } from './deletebike/deletebike.component';
import { BikeRouterModule } from './bike.routermodule';
@NgModule({
    declarations: [BikesComponent, AddbikeComponent, DeletebikeComponent],
    imports: [BikeRouterModule],

    exports: [BikesComponent]
})
export class BikeModule {

}