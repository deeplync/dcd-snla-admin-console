import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized-error',
  templateUrl: './unauthorized-error.component.html',
  styleUrls: ['./unauthorized-error.component.scss']
})
export class UnauthorizedErrorComponent implements OnInit {
  error: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
   }

  ngOnInit(): void {
  }
  logoutClick(): void {    
    window.location.href = "https://consoleadmin.itsandbox.live/Home/LogOut?area=MicrosoftIdentity";
    //window.location.href = "https://snlaadminweb.addcd.gov.ae/Home/LogOut?area=MicrosoftIdentity";
  }
}