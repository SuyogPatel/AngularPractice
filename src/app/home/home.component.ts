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
  public sendarray = [];
  constructor(public dataService: DataService) { }

  ngOnInit() {
   
  }
  onAddData(form: NgForm) {
    console.log(form);


    var toSave: Person = new Person(form.value.username, form.value.amount);

    
    
    
    //Arithmatic Operation 
    // if (form.value.amount < 0){
    //   form.value.amount + ________
    // }
    // else{
    //   form.value.amount + ________
    // }
    
    //Sending data to the firebase

    this.dataService.SendData(toSave)
      .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      );

    this.sendarray.push(new Person(form.value.username, form.value.amount));
    console.log(this.sendarray);  
  }

}
