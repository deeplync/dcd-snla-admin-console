import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';

import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'snla-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  account: Account | null = null;
  authorities: string[]=[];
  profileImage: any = '';

  constructor(private router: Router,private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result)=>{
        this.account=result
      }
    )
  
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.collapseNavbar();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
