import { Component } from '@angular/core';
import { TransactionsService } from './services/transactions.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TransactionsService]
})
export class AppComponent {
  constructor (private transactionsService: TransactionsService) {}
  
  transactions = []
  
  ngOnInit () {
    this.transactionsService.getTransactions().subscribe(response => {
      this.transactions = response
    })
  }

}
