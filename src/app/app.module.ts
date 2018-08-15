import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HttpModule } from '@angular/http';

const routes = [
  {path: '', component: TransactionsComponent},
  {path: 'home', component: TransactionsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
