import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './card-to-card-transfer/shared/shared.module';
import { TransactionModule } from './create-transfer/transaction/transaction.module';
import { HistoryModule } from './history-operations/history/history.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TransactionModule,
    SharedModule, 
    HistoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
