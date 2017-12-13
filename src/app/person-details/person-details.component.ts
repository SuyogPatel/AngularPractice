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
public sendArray : any[] ; 
public financeData =[];
  public persons: Person[];
  constructor(private dataservice : DataService ) { }

  ngOnInit() {
    console.log('inside oninit');
    this.dataservice.GetFinanceData().subscribe((data : Person[])=>{
      console.log(data);
      this.financeData = data;
      })
    
    this.persons = [
      new Person("Parth", 2500),
      new Person("Suyog", 3000)
    ]

    // this.dataservice.GetData()
    // .subscribe(
    //   (response : Response) => { 
    //     const person : Person = response.json();
    //     console.log(person);
    //     if(person){
    //     this.persons.push(person);
    //     }
    //   } 
    // )

  }
}
