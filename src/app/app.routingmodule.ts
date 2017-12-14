import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { NgModule } from "@angular/core";
import { UpdateDetailsComponent } from './updatedetails/updatedetails.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'updatedetails', component: UpdateDetailsComponent },
  { path: 'persondetails', component: PersonDetailsComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRouttingModule {

}