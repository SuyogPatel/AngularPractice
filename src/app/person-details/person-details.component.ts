import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  public persons: Person[];
  constructor() { }

  ngOnInit() {
    this.persons = [
      new Person("Parth", 2500),
      new Person("Suyog", 3000)
    ]


    console.log(this.persons);
  }


}
