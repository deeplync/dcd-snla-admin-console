import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { Account } from 'src/app/model/account.model';

import { IWordReport } from '../model/word-report.model';
import { WordReportService } from '../service/word-report.service';
@Component({
  selector: 'snla-scanned-word',
  templateUrl: './scanned-word.component.html',
  styleUrls: ['./scanned-word.component.scss']
})
export class ScannedWordComponent implements OnInit {
  wordsReport:IWordReport[]=[]
  wordsList:any[]=[]
  isLoading:boolean=false
  pageTitle = '';
  account: Account | null = null;
  constructor(private accountService:AccountService,private reportService:WordReportService,private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result)=>{
        this.account=result
      }
    )
    this.isLoading=true
    this.reportService.fetchScannedWord(false).subscribe(
      (data)=>{ 
        this.isLoading=false
        this.wordsReport=data
      }
    )
   this.updateTitle()
  }
  onSelectType(type:string):void{
    this.isLoading=true
    if(type=='notScanned'){
      this.reportService.fetchScannedWord(false).subscribe(
        (data)=>{
          this.isLoading=false
          this.wordsReport=data

        }
      )
    }
    else if(type=='scanned'){
      this.reportService.fetchScannedWord(true).subscribe(
        (data)=>{
          this.isLoading=false
          this.wordsReport=data
        }
      )
    }
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
