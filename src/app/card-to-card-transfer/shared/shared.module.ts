import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardToCardTransferComponent } from '../card-to-card-transfer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CardToCardTransferComponent],
  exports: [CardToCardTransferComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
