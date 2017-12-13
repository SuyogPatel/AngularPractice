import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './shared/data.service';
import { AppRouttingModule } from './app.routingmodule';
import { HttpClient } from '@angular/common/http';


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
    HttpClientModule,
    AppRouttingModule
  ],
  providers: [DataService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
