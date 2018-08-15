import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map.js';

@Injectable()
export class TransactionsService {
  constructor (private http: Http) {}

  getTransactions() {
    return this.http.get('http://1604cea4.ngrok.io')
    .map(res => res.json())
  }
}