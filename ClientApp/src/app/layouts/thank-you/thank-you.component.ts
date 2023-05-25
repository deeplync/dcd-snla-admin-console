import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snla-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLogout(){
    localStorage.clear();
    
  }
}
