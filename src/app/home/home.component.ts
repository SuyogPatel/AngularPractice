import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../person-details/person.model';
import { DataService } from './../shared/data.service';
import { Response } from '@angular/http';
import swal from 'sweetalert2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public dataService: DataService) { }
  public users = [];
  
  ngOnInit() {
    this.dataService.GetFinanceData().subscribe((data: any[]) => {
      if (data && data.length > 0) {
        this.users = data;
      }
    })

  }


  // public dummydata(form: NgForm) {
  //   for(let useobj of this.localdata){
  //   if(form.value.username = this.localdata){
  //   this.dataService.SendData(this.localdata)
  //     .subscribe(
  //     (response) => {
  //       console.log(response);
  //       form.reset();
  //       alert('Data has been saved successfully!');
  //     },
  //     (error) => console.log(error)
  //     );
  //   }
  //   else {
  //     alert('This name is already updated on the server')
  //   }
  // }

  onAddData(form: NgForm) {


    let isUserPresent = this.users.find((user) => {
      return user.username === form.value.username;

    });


    if (isUserPresent) {
      return alert('User already present');
    }

    this.users.push(new Person(form.value.username, form.value.amount));
    this.dataService.SendData(this.users).subscribe((response) => {
      console.log(response);
      // alert('The data has been added sucessfully')
      swal(
        'Congratulations!',
        'Your Data has been submitted to the server!',
        'success'
      )

    })

    // this.dataService.GetFinanceData().subscribe((data: any[]) => {
    //   console.log('mydata : ' + data)
    //   this.localdata = [];

    //   if (data) {
    //     data.push(new Person(form.value.username, form.value.amount));
    //     this.localdata = data;
    //   }
    //   else {
    //     this.localdata.push(new Person(form.value.username, form.value.amount));
    //   }


    //   this.dummydata(form);
    // })

  }
}