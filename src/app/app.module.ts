import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { DataService } from './shared/data.service';
import { AppRouttingModule } from './app.routingmodule';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouttingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
