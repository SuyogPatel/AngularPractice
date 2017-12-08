import { NgModule } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ShipsComponent } from './ships.component';


@NgModule({
    declarations: [
        FirstComponent,
        SecondComponent,
        ShipsComponent],

exports: [ShipsComponent]

})
export class ShipsModule { }