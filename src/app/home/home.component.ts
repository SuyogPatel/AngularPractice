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
  constructor(public dataService: DataService) { }
  public localdata = [];

  ngOnInit() {
  }


  public dummydata(form: NgForm) {
    this.dataService.SendData(this.localdata)
      .subscribe(
      (response) => {
        console.log(response);
        form.reset();
        alert('Data has been saved successfully');
      },
      (error) => console.log(error)
      );
  }

  onAddData(form: NgForm) {

    this.dataService.GetFinanceData().subscribe((data: any[]) => {
      console.log('mydata : '+data)
      this.localdata = [];
      
if(data!=null){
  data.push(new Person(form.value.username, form.value.amount));
  this.localdata = data;
}
else{
  this.localdata.push(new Person(form.value.username, form.value.amount));    
}
    

      this.dummydata(form);      
    })



  }
}