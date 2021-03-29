import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.css']
})

export class CreateTransferComponent implements OnInit {

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
