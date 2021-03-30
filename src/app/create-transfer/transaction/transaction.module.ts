import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferComponent } from '../create-transfer.component';
import { TransactionRoutingModule } from './transaction.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalstorageService } from 'src/app/localstorage.service';

@NgModule({
  declarations: [CreateTransferComponent],
  exports: [CreateTransferComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocalstorageService]
})

export class TransactionModule { }
