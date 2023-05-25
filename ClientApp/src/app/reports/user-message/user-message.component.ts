import { DatePipe } from '@angular/common';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'src/app/config/pagination.constants';
import { AccountService } from 'src/app/core/services/account.service';
import { Account } from 'src/app/model/account.model';
import { PaginatedResult } from 'src/app/model/pagination.model';
import { IUserMessage } from '../model/user-message.model';
import { UserMessageService } from '../service/user-message.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'snla-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.scss']
})
export class UserMessageComponent implements OnInit {
  btn1 = false
  btn2 = false
  userMessages: IUserMessage[] | null = [];
  allUserMessages: any[] = [];
  paginatedResult: PaginatedResult<IUserMessage[]> = new PaginatedResult();
  isLoading = false;
  totalItems = 0;
  itemsPerPage: number = 20;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  pageTitle = '';

  fromDate!: any;;
  toDate!: any;;
  account: Account | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userMessageService: UserMessageService,
    private titleService: Title,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.fetchAccount().subscribe(
      (result) => {
        this.account = result
        // console.log(this.account)
      }
    )
    this.handleNavigation();
    this.updateTitle();
  }

  @ViewChild("print") print!: ElementRef;

  @ViewChild('printContent')
  private printContent!: ElementRef;

  triggerPrint(type: string) {
    this.isLoading = true;
    let el: HTMLElement = this.print.nativeElement;
    this.userMessageService.queryAll({
      messageType: type
    }).subscribe(async (res: any) => {
      let userMessages: IUserMessage[] = res.body;
      let content = "";
      for (let i = 0; i < userMessages.length; i++) {
        let message = userMessages[i];
        content += "<tr><td class='pl-4'>" + (i + 1) +"</td>"
          + "<td>" + message.firstName + " " + message.lastName +"</td>"
          + "<td>" + message.messageType + "</td>"
          + "<td style='text-align: left;'>"+message.description + "</td>"
          + "<td>"+ dayjs(message.createdDateMobile).format('D MMM YYYY h:mm A') + "</td>"
          + "</tr>"
      }
      this.printContent.nativeElement.innerHTML = content;
      this.isLoading = false;
      el.click();
    }),() => (this.isLoading = false);
  }

  loadAll(): void {
    this.isLoading = true;
    this.userMessageService
      .query({
        pageNumber: this.page,
        pageSize: this.itemsPerPage
        //sort: this.sort(),
      })
      .subscribe(
        (res: HttpResponse<IUserMessage[]>) => {
          this.isLoading = false;
          this.paginateOperations(res.body, res.headers);
        },
        () => (this.isLoading = false)
      );
  }

  trackId(index: number, item: IUserMessage): string {
    return item.id!;
  }

  transition(): void {
    this.router.navigate(['./user-message'], {
      relativeTo: this.activatedRoute.parent,
      queryParams: {
        page: this.page,
        sort: `${this.predicate},${this.ascending ? ASC : DESC}`,
      },
    });
  }

  onSelectType(type: string, fromDate: string, toDate: string): void {
    // this.allUserMessages = [];
    this.btn2 = false;
    this.btn1 = true;
    this.isLoading = true;
    this.userMessageService.query({
      pageNumber: this.page,
      pageSize: this.itemsPerPage,
      // sort: this.sort(),
      messageType: type,
      startDate: fromDate,
      endDate: toDate
    })
      .subscribe(
        (res: HttpResponse<IUserMessage[]>) => {
          this.isLoading = false;
          this.paginateOperations(res.body, res.headers);
        },
        () => (this.isLoading = false)
      );

    // this.userMessageService.queryAll({
    //   messageType: type,
    //   startDate: fromDate,
    //   endDate: toDate
    // })
    //   .subscribe(
    //     (res: HttpResponse<IUserMessage[]>) => {
    //       this.allUserMessages = res.body ?? [];
    //       alert(this.allUserMessages.length)
    //     },
    //     () => (this.isLoading = false)
    //   );
  }


  // print(type: string): any {
  //   this.userMessageService.queryAll({
  //     messageType: type
  //   })
  //     .subscribe(
  //       (res: HttpResponse<IUserMessage[]>) => {
  //         this.allUserMessages = res.body ?? [];
  //         return this.allUserMessages;
  //       },
  //       () => (this.isLoading = false)
  //     );
  // }


  filterByStartDate(date: string) {
    var datePipe = new DatePipe('en-US');
    this.fromDate = datePipe.transform(date, 'yyyy-MM-dd');
  }
  filterByEndDate(date: string) {
    var datePipe = new DatePipe('en-US');
    this.toDate = datePipe.transform(date, 'yyyy-MM-dd');
  }
  private handleNavigation(): void {
    combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
      const page = params.get('page');
      this.page = +(page ?? 1);
      const sort = (params.get(SORT) ?? data['defaultSort']).split(',');
      this.predicate = sort[0];
      this.ascending = sort[1] === ASC;
      this.loadAll();
    });
  }

  private sort(): string[] {
    const result = [`${this.predicate},${this.ascending ? ASC : DESC}`];
    if (this.predicate !== 'name') {
      result.push('name');
    }
    return result;
  }

  private paginateOperations(userMessages: IUserMessage[] | null, headers: HttpHeaders): void {
    this.userMessages = userMessages;
    if (headers.get('Pagination') !== null) {
      let pagination = JSON.parse(String(headers.get('Pagination')));
      this.totalItems = Number(pagination.totalItems);
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
