import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HistoryRoutingModule } from './history.routing';
import { HistoryOperationsComponent } from '../history-operations.component';

@NgModule({
  declarations: [HistoryOperationsComponent],
  exports: [HistoryOperationsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
