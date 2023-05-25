import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'src/app/config/pagination.constants';
import { Customer, ICustomer } from '../customer.model';
import { Country } from 'src/app/model/country.model';
import { DatePipe } from '@angular/common';
import * as dayjs from 'dayjs';
import { CustomerService } from '../service/customer.service';
import { CountryService } from 'src/app/core/services/country.service';
import { Title } from '@angular/platform-browser';
import { Account } from 'src/app/model/account.model';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'snla-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  nations: Country[] | null = []
  customers: ICustomer[] = [];
  isLoading = false;
  totalItems = 0;
  itemsPerPage: number = 20;
  page!: number;
  predicate!: string;
  ascending!: boolean;
  selectedLastAccessDate!: any;
  selectedNationality!: string;
  pageTitle = '';
  account: Account | null = null;
  constructor(private accountService: AccountService, private titleService: Title, private activatedRoute: ActivatedRoute, private router: Router, protected modalService: NgbModal, private customerService: CustomerService, private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.handleNavigation();
    this.updateTitle()
  }

  loadAll(): void {
    this.accountService.fetchAccount().subscribe(
      (result) => {
        this.account = result
      }
    )
    this.isLoading = true;
    this.customerService
      .query({
        pageNumber: this.page,
        pageSize: this.itemsPerPage
      })
      .subscribe(
        (res: HttpResponse<Customer[]>) => {
          this.isLoading = false;
          this.paginateOperations(res.body ?? [], res.headers);
        },
        () => (this.isLoading = false)
      );
    this.countryService.fetchAll().subscribe(
      (data) => {
        this.nations = data
      }
    )

  }

  trackId(index: number, item: ICustomer): string {
    return item.id!;
  }

  transition(): void {
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute.parent,
      queryParams: {
        page: this.page,
        sort: `${this.predicate},${this.ascending ? ASC : DESC}`,
      },
    });
  }
  filterByNationality(nationality: string) {
    this.selectedNationality = nationality
    this.isLoading = true;
    this.customerService
      .query({
        pageNumber: this.page,
        pageSize: this.itemsPerPage,
        nationality: this.selectedNationality,
        date: this.selectedLastAccessDate ? this.selectedLastAccessDate : ""
      })
      .subscribe(
        (res: HttpResponse<Customer[]>) => {
          this.isLoading = false;
          this.paginateOperations(res.body ?? [], res.headers);

        },
        () => (this.isLoading = false)
      );
  }

  filterByAccessDate(date: string) {

    this.customers = [];
    var datePipe = new DatePipe('en-US');
    this.selectedLastAccessDate = datePipe.transform(date, 'yyyy-MM-dd');
    this.isLoading = true;
    this.customerService
      .query({
        pageNumber: this.page,
        pageSize: this.itemsPerPage,
        nationality: this.selectedNationality ? this.selectedNationality : '',
        date: this.selectedLastAccessDate ? this.selectedLastAccessDate : ''
      })
      .subscribe(
        (res: HttpResponse<Customer[]>) => {
          this.isLoading = false;
          this.paginateOperations(res.body ?? [], res.headers);
        },
        () => (this.isLoading = false)
      );
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
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private paginateOperations(customers: Customer[], headers: HttpHeaders): void {
    this.customers = customers;
    if (headers.get('Pagination') !== null) {
      let pagination = JSON.parse(String(headers.get('Pagination')));
      this.totalItems = Number(pagination.totalItems);
    }
  }


}
