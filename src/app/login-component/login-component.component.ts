import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  signin = new FormGroup({
    claveAcceso: new FormControl(null, Validators.required),
    captcha: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}
