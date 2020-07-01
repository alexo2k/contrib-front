import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContribService } from '../services/contrib.service';
import { RecaptchaResponse } from '../models/recaptcha-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;

   signin = new FormGroup({
      claveAcceso: new FormControl(null, Validators.required),
      recaptcha: new FormControl(null)
    });

    captchaResolved;

  constructor(private contriServ: ContribService) {

   }

  ngOnInit(): void {
    this.captchaResolved = false;
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);

    this.contriServ.sendCaptchaToken(captchaResponse).subscribe((data: RecaptchaResponse) => {
      console.log(data);

      if (data.status === 'success') {
        this.captchaResolved = true;
      }
    });
 }

}
