import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('recaptcha', {static: true}) recaptchaElement: ElementRef;

   signin = new FormGroup({
      claveAcceso: new FormControl(null, Validators.required)
    });

  constructor() { }

  ngOnInit(): void {
    this.addRecaptchaScript();
  }

  renderReCaptcha() {
    // tslint:disable-next-line: no-string-literal
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LclvqgZAAAAAIvCtdcccZbKAvyKZR2bRJKvP7Ja',
      'callback': (response) => {
          console.log(response);
      }
    });
  }

  addRecaptchaScript() {
    window['grecaptchaCallback'] = () => {
      this.renderReCaptcha();
    };

    (function(d, s, id, obj){
      let js = d.getElementsByTagName(s)[0];
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptcha(); return; }
      js = d.createElement(s); js.id = id;
      // js.src = 'https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit';
      js.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit');
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
  }



}
