import { Component, OnInit } from '@angular/core';
import { DataService } from './../shared/data.service';
import { Person } from './../person-details/person.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  constructor(public dataservice: DataService) { }

  ngOnInit() {
  }


  public dummydata(data : any[],form : NgForm) {
    this.dataservice.SendData(data)
      .subscribe(
      (response) => {
        console.log(response);
        form.reset();
        alert('Data has been updated successfully!');
      },
      (error) => console.log(error)
      );
  }
  onUpdateData(form: NgForm) {
    this.dataservice.GetFinanceData().subscribe((data: any[]) => {
      for (let person of data) {
        if (person.username === form.value.username) {
          person.amount = person.amount - form.value.amount;
          console.log("updated amount : " + person.amount);
          break;
        }
      }
      this.dummydata(data,form);
    })
  }
}
