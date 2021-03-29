import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransferComponent } from '../create-transfer.component';

const routes: Routes = [{path:'', component: CreateTransferComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }