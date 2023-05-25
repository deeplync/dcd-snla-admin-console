import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
// import { AccountService } from 'src/app/core/services/account.service';

import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'snla-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public href: string = "";
  pageTitle = '';
  account: Account | null = null;
  showThankYou:boolean=false
  constructor( private titleService: Title, private router: Router,private accountService:AccountService) {}

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result)=>{
        this.account=result
      }
    )
    // this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.href=event.url
        if(this.href=='/(route1:thank-you)')
        {
          this.showThankYou=true
        }
        this.updateTitle();
      }
    });
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
    const title: string = routeSnapshot.data['pageTitle'] ?? '';
    if (routeSnapshot.firstChild) {
      return this.getPageTitle(routeSnapshot.firstChild) || title;
    }
     return title;
   
  }

  private updateTitle(): void {
    let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
    this.pageTitle = pageTitle ? pageTitle : '';
    this.titleService.setTitle(pageTitle);
  }
}
