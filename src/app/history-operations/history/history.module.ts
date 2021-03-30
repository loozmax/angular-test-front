import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HistoryRoutingModule } from './history.routing';
import { HistoryOperationsComponent } from '../history-operations.component';
import { LocalstorageService } from 'src/app/localstorage.service';

@NgModule({
  declarations: [
    HistoryOperationsComponent
  ],
  exports: [HistoryOperationsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HistoryRoutingModule
  ],
  providers: [LocalstorageService]
})
export class HistoryModule { }
