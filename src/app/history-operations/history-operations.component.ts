import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { LocalstorageService } from '../localstorage.service';


@Component({
  selector: 'app-history-operations',
  templateUrl: './history-operations.component.html',
  styleUrls: ['./history-operations.component.css']
})
export class HistoryOperationsComponent implements OnInit {
  date = [];
  repeatObj = [];

  constructor(private router: Router, private svc: LocalstorageService) { }

  ngOnInit(): void {
    this.date = this.svc.getAllData();
  }

  deleteItem(id:number) {
    let result:any = this.date.splice(id - 1, 1);
    this.svc.afterDelete(this.date);
  }

  repeat(id:number) {
    this.repeatObj.push(this.date[id - 1]);
    this.svc.pushInLocalStorageRepeatItem(this.repeatObj);
    this.router.navigate(['']);
  }

}
