import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.css']
})

export class CreateTransferComponent implements OnInit {
  dateNow = new Date();
  repeat: any[] = [];
  obj: any[] = [];
  months: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years: any = [2021, 2022, 2023, 2024, 2025, 2026];

  constructor(private router: Router) { }
  myForm : FormGroup = new FormGroup({      
    "cardWhoPay": new FormControl('', [Validators.required, Validators.pattern('[0-9]{16}')]),
    "FIO": new FormControl("", [Validators.required, Validators.pattern('^[А-Яа-яЁё\s]+$')]),
    "month": new FormControl(this.months[0], [Validators.required]),
    "year": new FormControl(this.years[0], Validators.required),
    "usercard": new FormControl("", [Validators.required, Validators.pattern('[0-9]{16}')]),
    "sum": new FormControl("", [Validators.required, Validators.pattern('^[0-9]*[.]?[0-9]+$')]),
    "dateNow": new FormControl(this.dateNow)
  });

  submit() {
    if (localStorage.getItem('date')) {
      this.obj = JSON.parse(localStorage.getItem('date')!);
    }
    if (localStorage.getItem('repeat')) {
      localStorage.removeItem('repeat');
    }
    this.router.navigate(['history']);

    this.obj.push({
      "cardWhoPay" : this.myForm.value.cardWhoPay,
      'FIO': this.myForm.value.FIO,
      'month': this.myForm.value.month,
      'year': this.myForm.value.year,
      'cardUser': this.myForm.value.usercard,
      'sum': this.myForm.value.sum,
      'dateNow' : `${this.dateNow.getDate()}-${this.dateNow.getMonth()}-${this.dateNow.getFullYear()}`,
      'index': this.obj.length + 1,
      'spliceCardNumberWhoPay' : `${this.myForm.value.cardWhoPay.slice(0, 4)} **** **** ${this.myForm.value.cardWhoPay.slice(10, 14)}`,
      'sliceCardUserNumber' : `${this.myForm.value.usercard.slice(0, 4)} **** **** ${this.myForm.value.usercard.slice(10, 14)}`
    })

    localStorage.setItem('date', JSON.stringify(this.obj));
  }

  ngOnInit(): void {
    this.repeat = JSON.parse(localStorage.getItem('repeat')!);
    if (this.repeat) {
      this.myForm.controls['month'].setValue(this.repeat[0].month);
      this.myForm.controls['year'].setValue(this.repeat[0].year);
      this.myForm.controls['sum'].setValue(this.repeat[0].sum);
      this.myForm.controls['cardWhoPay'].setValue(this.repeat[0].cardWhoPay);
      this.myForm.controls['usercard'].setValue(this.repeat[0].cardUser);
      this.myForm.controls['FIO'].setValue(this.repeat[0].FIO);
    }
  }
}
