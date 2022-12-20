import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private serviceInstance: MyserviceService) {}
  ngOnInit(): void {}

  register(formVal: NgForm) {
    let FormData = { name: formVal.value.name, event: formVal.value.event }; //In formVal.value.(field) this field comes from name in html ex: name="event", name="rno"
    this.serviceInstance.pushData(FormData);
    // console.warn(FormData)
  }
}
