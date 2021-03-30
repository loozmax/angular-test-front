import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-history-operations',
  templateUrl: './history-operations.component.html',
  styleUrls: ['./history-operations.component.css']
})
export class HistoryOperationsComponent implements OnInit {
  date = [];
  repeatObj = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.date = JSON.parse(localStorage.getItem('date')!);
  }

  deleteItem(id:number) {
    console.log(id);
    let result:any = this.date.splice(id - 1, 1);
    localStorage.setItem('date', JSON.stringify(this.date));
  }

  repeat(id:number) {
    this.repeatObj.push(this.date[id - 1]);
    localStorage.setItem('repeat', JSON.stringify(this.repeatObj));

    this.router.navigate(['']);
  }

}
