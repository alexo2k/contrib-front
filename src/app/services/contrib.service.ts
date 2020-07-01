import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecaptchaResponse } from '../models/recaptcha-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContribService {

  private SERVER_URL = 'http://localhost:8080/contribSntSepomex/sntsContribApi/public/';

  constructor(private http: HttpClient) {

   }

  // sendCaptchaToken(captchaToken: string) {
  //   const parameter = JSON.stringify({ token: captchaToken});
  //   return this.http.post(this.SERVER_URL + 'login/captchaValidate', parameter, {headers: {'Content-Type': 'application/json'}});
  // }


  /* ambos son validos*/
  sendCaptchaToken(captchaToken: string): Observable<RecaptchaResponse> {
    const tokenObj: object = { token: captchaToken};
    return this.http.post<RecaptchaResponse>(this.SERVER_URL + 'login/captchaValidate', tokenObj, {headers: {'Content-Type': 'application/json'}});
  }

}
