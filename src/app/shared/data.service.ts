import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Person } from './../person-details/person.model';
import { Observable } from 'Rxjs/Observable';
import 'rxjs/Rx';
import { Response } from "@angular/http/src/static_response";
@Injectable()
export class DataService {
    public financeData: Person[] = [];
    constructor(private http: HttpClient) {
    }
    SendData(data: Person) {
        console.log(data);
        this.financeData.push(data);
        return this.http.put('https://ng-finance.firebaseio.com/data.json', this.financeData);
    }

    GetFinanceData() {
        console.log('inside getdata');
        return this.http.get('https://ng-finance.firebaseio.com/data.json');
    }
}