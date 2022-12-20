import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { event } from './events';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  e1: event[] = [];
  e2: event[] = [];
  locale1: any;
  locale2: any;
  constructor() {
    //This constructor is used to fetch details from local storage
    this.locale1 = localStorage.getItem('Event1');

    this.locale2 = localStorage.getItem('Event2');

    if (this.locale1 == null) {
      this.locale1 = [];
    } else if (this.locale2 == null) {
      this.locale2 = [];
    } else {
      this.e1 = JSON.parse(this.locale1);
      this.e2 = JSON.parse(this.locale2);

      //Now e1 and e2 contain names and eventType of all the users who have registered
    }
  }
  getEvent1() {
    return this.e1;
  }
  getEvent2() {
    return this.e2;
  }

  adminDatabase = [
    {
      username: 'AdminMithilesh',
      password: 456,
    },
  ];

  pushData(event: any) {
    // console.log(event);
    if (Object.values(event)[1] == 'event1') {
      this.e1.push(event);
      localStorage.setItem('Event1', JSON.stringify(this.e1));
    } else {
      this.e2.push(event);

      localStorage.setItem('Event2', JSON.stringify(this.e2));
    }
  }
}
