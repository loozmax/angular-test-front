import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.css']
})

export class CreateTransferComponent implements OnInit {

  constructor(private router: Router) { }

  dateNow = new Date();
  repeat: any[] = [];
  cardNumber: string = '';
  nameAndSurname: string = '';
  activeMonth: number = 0;
  activeYear: number = 0;
  sum: number = 0;
  cardUserNumber: string = '';
  obj: any[] = [];

  

  submit(form: NgForm) {
    if (localStorage.getItem('date')) {
      this.obj = JSON.parse(localStorage.getItem('date')!);
    }
    if (localStorage.getItem('repeat')) {
      localStorage.removeItem('repeat');
    }
    this.router.navigate(['history']);

    this.obj.push({
      "cardWhoPay" : form.value.cardNumber,
      'FIO': form.value.name,
      'month': form.value.month,
      'year': form.value.year,
      'cardUser': form.value.usercard,
      'sum': form.value.sum,
      'dateNow' : `${this.dateNow.getDate()}-${this.dateNow.getMonth()}-${this.dateNow.getFullYear()}`,
      'index': this.obj.length + 1,
      'spliceCardNumberWhoPay' : `${form.value.cardNumber.slice(0, 4)} **** **** ${form.value.cardNumber.slice(10, 14)}`,
      'sliceCardUserNumber' : `${form.value.usercard.slice(0, 4)} **** **** ${form.value.usercard.slice(10, 14)}`
    })

    localStorage.setItem('date', JSON.stringify(this.obj));
  }

  ngOnInit(): void {
    this.repeat = JSON.parse(localStorage.getItem('repeat')!);
    console.log(this.repeat[0].month);
    if (this.repeat[0]) {
      this.activeMonth = this.repeat[0].month;
      this.activeYear = this.repeat[0].year;
      this.sum = this.repeat[0].sum;
      this.cardNumber = this.repeat[0].cardWhoPay;
      this.cardUserNumber = this.repeat[0].cardUser;
      this.nameAndSurname = this.repeat[0].FIO;
    }
  }

  

}
