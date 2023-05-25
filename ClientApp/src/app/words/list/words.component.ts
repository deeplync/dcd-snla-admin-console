import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { IWord } from '../word.model';
import { WordService } from '../service/word.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AccountService } from 'src/app/core/services/account.service';
import { Account } from 'src/app/model/account.model';

@Component({
  selector: 'snla-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  pageTitle = '';
  words?: IWord[];
  isLoading = false;
  account: Account | null = null;
  constructor(private accountService:AccountService,private wordService:WordService,private titleService: Title,private router: Router ) {}

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result)=>{
        this.account=result
      }
    )
    this.loadAll();
    this.updateTitle()
  }

  loadAll(): void {
    this.isLoading = true;
    this.wordService.query().subscribe(
      (res: HttpResponse<IWord[]>) => {
        this.isLoading = false;
        this.words = res.body ?? [];
        // console.log(this.words)
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  trackId(index: number, item: IWord): string {
    return item.id!;
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
