import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent {
  @Input() payment;

  onClick(id) {
    console.log('click', id, this.payment)
    this.payment.amount = Number(this.payment.amount) + 1
  }
}
