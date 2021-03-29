import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryOperationsComponent } from '../history-operations.component';

const routes: Routes = [{path:'history', component: HistoryOperationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }