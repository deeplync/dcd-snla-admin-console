import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AccountService } from '../core/services/account.service';
import { Account } from '../model/account.model';

import { HomeService } from './service/home.service';

@Component({
  selector: 'snla-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = '';
  learnedCount: number = 0
  totelLearned: number = 0
  scannedCount: number = 0
  totalScanned: number = 0
  RegistrationCount: number = 0;
  account: Account | null = null;
  constructor(private homeService: HomeService, private titleService: Title, private router: Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result) => {
        this.account = result
      }
    )
    this.homeService.getWordCount().subscribe(
      (countData) => {
        this.scannedCount = countData.scannedCount
        this.learnedCount = countData.learnedCount
        this.totalScanned = countData.scannedCount + countData.unScannedCount
        this.totelLearned = countData.learnedCount + countData.unLearnedCount
      }
    )

    this.homeService.registrationCount().subscribe(
      (countData) => {
        this.RegistrationCount = countData
      }
    )

    this.updateTitle()
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
