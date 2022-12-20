import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private adminDet: MyserviceService,
    private router: Router
  ) {}
  loginFlag: boolean = false;
  error: boolean = true;
  ngOnInit(): void {}
  submit(formVal: any) {
    // Checking username
    if (
      Object.values(formVal)[0] == this.adminDet.adminDatabase[0].username &&
      Object.values(formVal)[1] == this.adminDet.adminDatabase[0].password
    ) {
      this.error = false;
      setTimeout(() => {
        this.router.navigateByUrl('Home');
      }, 3000);
    } else {
      this.error = true;
      this.loginFlag = true;
    }
    // console.log(Object.values(formVal)[0])
  }

}
