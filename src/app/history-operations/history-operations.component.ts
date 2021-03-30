import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-history-operations',
  templateUrl: './history-operations.component.html',
  styleUrls: ['./history-operations.component.css']
})
export class HistoryOperationsComponent implements OnInit {

  date = JSON.parse(localStorage.getItem('date')!);


  constructor() { }

  ngOnInit(): void {
  }

  deleteItem() {
    
  }

}
