import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  obj: any[] = [];
  repeat: any[] = [];
  repeatObj = [];

  //push 'date'
  pushInLocalStorageFromForms(obj: any) {
    if (localStorage.getItem('date')) {
      this.obj = JSON.parse(localStorage.getItem('date')!);
    }
    this.obj.push(obj);
    console.log(obj);
    localStorage.setItem('date', JSON.stringify(this.obj));
  }

  //push 'repeat'
  pushInLocalStorageRepeatItem(repeatObj: any) {
    localStorage.setItem('repeat', JSON.stringify(repeatObj));
  }

  //remove 'repeat'
  removeRepeatValueFromFields() : void {
    if (localStorage.getItem('repeat')) {
      localStorage.removeItem('repeat');
    }
  }

  //get what i want to repeat 
  getNoteWhatUserWhatToRepeat() {
    this.repeat = JSON.parse(localStorage.getItem('repeat')!);
    return this.repeat;
  }

  getAllData() {
    return JSON.parse(localStorage.getItem('date')!);
  }

  //get all data after delete by click
  afterDelete(newData:any) {
    localStorage.setItem('date', JSON.stringify(newData));
  }


}
