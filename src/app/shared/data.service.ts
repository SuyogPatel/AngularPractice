import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Person } from './../person-details/person.model';
import { Observable } from'Rxjs/Observable';
@Injectable()
export class DataService {
    constructor(private http: Http) {
    }
    SendData(data : Person) {
        console.log(data);

    return this.http.post('https://ng-finance.firebaseio.com/data.json',data);
    }

    GetData(){
     return this.http.get('https://ng-finance.firebaseio.com/data.json');
    }
}