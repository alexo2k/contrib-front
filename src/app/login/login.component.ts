import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContribService } from '../services/contrib.service';
import { RecaptchaResponse } from '../models/recaptcha-response.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrordialogComponent } from './../dialogs/errordialog/errordialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;

  captchaResolved;
  signin: FormGroup;

  constructor(private contriServ: ContribService, public dialog: MatDialog) {

   }

  ngOnInit(): void {
    // this.captchaResolved = false;
    this.captchaResolved = true;
    this.signin = new FormGroup({
      claveAcceso: new FormControl(null, Validators.required)
    });

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

 onSubmit() {
  if(this.signin.invalid) {
    console.log('no valido');
  } else {
    // tslint:disable-next-line: no-string-literal
    // console.log(this.signin.controls['claveAcceso'].value);
    // console.log(this.signin.value);
    const claveAcceso = this.signin.controls['claveAcceso'].value.trim();
    this.contriServ.validateAccessKey(claveAcceso).subscribe((data: any) => {
      console.log(data.empleado);
    }, (error: HttpErrorResponse) => {
      // console.log("Ocurrio un error: " + error.error.message);
      this.dialog.open(ErrordialogComponent);
    });
  }
 }

}
