import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor (private http: Http) {}

  getTransactions() {
    return this.http.get('http://localhost:3000/payments')
      .map(res => res.json())
  }

  getNews() {
    return this.http.get('http://localhost:3000/news')
      .map(res => res.json())
  }

}