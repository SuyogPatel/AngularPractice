import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { DataService } from '../shared/data.service';
import { Response, Http } from '@angular/http';

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

  
}
