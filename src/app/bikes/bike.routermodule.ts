import { NgModule } from "@angular/core/src/metadata/ng_module";
import { Routes } from "@angular/router/src/config";
import { RouterModule } from "@angular/router/src/router_module";

const bikeroute : Routes = [
    {}
]

@NgModule({
    imports : [RouterModule.forChild(bikeroute)],
    
    exports : [ RouterModule]

})
export class BikeRouterModule{}