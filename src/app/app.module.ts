import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';

const routes = [
  {path: '', component: TransactionsComponent},
  {path: 'news', component: NewsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HeaderComponent,
    NewsComponent
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
