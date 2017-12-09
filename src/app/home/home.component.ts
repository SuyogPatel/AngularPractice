import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../person-details/person.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public name = 'suyog';
  constructor() { }

  ngOnInit() {
  }
  onAddData(form: NgForm) {
    console.log(form.value.username); 

    form.value.username.push(Person);
    form.value.amount.push(Person);



    

  }

}
