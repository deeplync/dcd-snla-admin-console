import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { Account } from 'src/app/model/account.model';
import { IWordReport } from '../model/word-report.model';
import { WordReportService } from '../service/word-report.service';

@Component({
  selector: 'snla-learned-word',
  templateUrl: './learned-word.component.html',
  styleUrls: ['./learned-word.component.scss']
})
export class LearnedWordComponent implements OnInit {
  wordsReport:IWordReport[]=[]
  wordsList:IWordReport[]=[]
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
    this.reportService.fetchLearnedWord(false).subscribe(
      (data)=>{ 
         this.isLoading=false
         this.wordsReport=data}
    )
    this.updateTitle()
  }
  onSelectType(type:string):void{
    this.isLoading=true
    if(type=='notlearned'){
      this.reportService.fetchLearnedWord(false).subscribe(
        (data)=>{
          this.wordsReport=data
          this.isLoading=false
        }
      )
    }
    else if(type=='learned'){
      this.reportService.fetchLearnedWord(true).subscribe(
        (data)=>{
          this.wordsReport=data
          this.isLoading=false
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
