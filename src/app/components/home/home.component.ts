import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  event1: any;
  event2: any;
  constructor(private servDet: MyserviceService) {}

  ngOnInit(): void {
    this.event1 = this.servDet.getEvent1();
    this.event2=this.servDet.getEvent2();
  }
}
