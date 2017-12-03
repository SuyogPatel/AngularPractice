
import { CarsComponent } from "./cars.component";
import { AddComponent } from "./add/add.component";
import { DeleteComponent } from "./delete/delete.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations :[CarsComponent,AddComponent,DeleteComponent],
    exports  : [CarsComponent]


})

export class CarsModule{}