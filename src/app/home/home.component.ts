import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../person-details/person.model';
import { DataService } from './../shared/data.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = 'suyog';
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }
  onAddData(form: NgForm) {
    console.log(form.value.username);

    var toSave: Person = new Person(form.value.username, form.value.amount);

    this.dataService.SendData(toSave)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );
  }

}
