import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToHome(): void {
    window.location.href = 'http://www.sntsepomex.org';
  }

  goToRequestPass(): void {
    window.location.href = 'http://sntsepomex.org/web/SECRETARIAS/sistemas.html';
  }

}
