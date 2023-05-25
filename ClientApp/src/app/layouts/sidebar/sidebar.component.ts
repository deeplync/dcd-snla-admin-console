import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account.service';

import { Account } from 'src/app/model/account.model';


@Component({
  selector: 'snla-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  i = 1;
  isSidebarCollapsed = true;
  account: Account | null = null;
  overviewIcon = "../../../assets/images/icons/overview-white.png";
  customerIcon = "../../../assets/images/icons/Customers-grey.png";
  wordsManagementIcon = "../../../assets/images/icons/word-grey.png";
  reportIcon = "../../../assets/images/icons/report-grey.png";
  settingsIcon = "../../../assets/images/icons/settings-grey.png";
  logoutIcon = "../../../assets/images/icons/logout-grey.png";
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result) => {
        this.account = result
      }
    )
  }


  menuClick(i: number): void {
    this.i = i;
  }

  mouseOverReportIcon(event: any): void {
    event.stopPropagation();
    this.reportIcon = '../../../assets/images/icons/report-grey.png'
  }

  mouseOutReportIcon(event: any): void {
    event.stopPropagation();
    this.reportIcon = '../../../assets/images/icons/report-grey.png'
  }



  collapseSidebar(): void {
    this.isSidebarCollapsed = true;
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  logoutClick(): void {
    window.localStorage.removeItem("authenticationToken");
    window.location.href = "https://consoleadmin.itsandbox.live/Home/LogOut?area=MicrosoftIdentity";
    //window.location.href = "https://snlaadminweb.addcd.gov.ae/Home/LogOut?area=MicrosoftIdentity";



  }

}
