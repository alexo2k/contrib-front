import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContribService } from '../services/contrib.service';
import { RecaptchaResponse } from '../models/recaptcha-response.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrordialogComponent } from './../dialogs/errordialog/errordialog.component';
import { empleado } from '../models/empleado.model';
import { LoginReponse } from '../models/login-reponse.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;

  captchaResolved;
  signin: FormGroup;
  loginResponse: LoginReponse;

  constructor(private contriServ: ContribService, public dialog: MatDialog, private router: Router) {

   }

  ngOnInit(): void {
    // this.captchaResolved = false;
    this.captchaResolved = true;
    this.signin = new FormGroup({
      claveAcceso: new FormControl(null, Validators.required),
      captchaToggle: new FormControl(null, Validators.requiredTrue)
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
    const claveAcceso = this.signin.controls['claveAcceso'].value.trim();
    this.contriServ.validateAccessKey(claveAcceso).subscribe((data: LoginReponse) => {
      this.loginResponse = data;
      if (data.status === 'success') {
          console.log(this.loginResponse);
          sessionStorage.setItem('empleado', JSON.stringify(data.empleado));
          sessionStorage.setItem('token', JSON.stringify(data.token));
          sessionStorage.setItem('estadoDocBox', JSON.stringify(data.estadoDocBox));
          sessionStorage.setItem('empleadoDocBoxId', JSON.stringify(data.empleadoDocBoxId));

          this.router.navigate(['/userHome']);
        } else {
          this.dialog.open(ErrordialogComponent);
          this.signin.reset();
        }
    }, (error: HttpErrorResponse) => {
      console.log('Ocurrio un error: ' + error.error.message);
      this.dialog.open(ErrordialogComponent);
      this.signin.reset();
    });
  }
 }

 goToAvisoPrivacidad() {
  window.location.href = 'http://www.sntsepomex.org/aportaciones/declaracionprivacidad.html';
 }

}
