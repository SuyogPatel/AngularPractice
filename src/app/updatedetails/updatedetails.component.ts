import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../shared/data.service';
import { Person } from './../person-details/person.model';
import { NgForm } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  public borrowers: any= [];
  model: any;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200).distinctUntilChanged()
      .merge(this.focus$)
      .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
      .map(term => (term === '' ? this.borrowers : this.borrowers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10));

  
  constructor(public dataservice: DataService) { }

  ngOnInit() {

    this.dataservice.GetFinanceData().subscribe((data: any[]) => {

      if (data) {       

        this.borrowers = data.map((user) => {
          return user.username;
        });
        console.log('Slice error',this.borrowers);
      }
     

    });


  }


  public dummydata(data: any[], form: NgForm) {
    this.dataservice.SendData(data)
      .subscribe(
      (response) => {
        console.log(response);
        form.reset();
        // alert('Data has been updated successfully!');
        swal({
          title: 'Do you want to Update the Data?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
          if (result.value) {
            swal(
              'Updated!',
              'Your data has been updated.',
              'success'
            )
          }
        })
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
      this.dummydata(data, form);
    })
  }
}
