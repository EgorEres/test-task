import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-payments',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent {
  constructor (private apiService: ApiService) {}
  
  payments = []
  news = []

  ngOnInit () {
    this.apiService.getTransactions().subscribe(response => {
      console.log(response)
      this.payments = response
    })
    this.apiService.getNews().subscribe(response => {
      this.news = response
    })
  }
}
