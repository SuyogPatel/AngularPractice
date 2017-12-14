import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";
import { NgModule } from "@angular/core";
import { AoperationComponent } from "./aoperation/aoperation.component";

const appRoutes: Routes = [
    { path: '', redirectTo:'home', pathMatch : 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'aoperation', component : AoperationComponent},
    { path: 'persondetails', component: PersonDetailsComponent }
  ]
  @NgModule({
      imports : [RouterModule.forRoot(appRoutes)],
exports : [RouterModule]

  })
export class AppRouttingModule{

}