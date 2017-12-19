import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { DataService } from '../shared/data.service';
import { Response, Http } from '@angular/http';
import { error } from 'util';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  public financeData = [];
  public persons: Person[];


  constructor(private dataservice: DataService) { }


  ngOnInit() {
    this.dataservice.GetFinanceData().subscribe((data: any[]) => {
    this.financeData = data;
    })
  }

  onDeleteDetail(i: number) {
    console.log("index :" +i)
    this.financeData.splice(i,1);
    console.log("array :" +this.financeData)
    console.log(this.financeData.length)

    this.dataservice.SendData(this.financeData)
      .subscribe(
      (response: Response) => { console.log(response) },
      (error) => console.log(error));
  }
}



