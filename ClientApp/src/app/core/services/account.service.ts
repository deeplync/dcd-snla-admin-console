import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/account.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private Url = environment.baseUrl + 'v1/admin/account';
  constructor(private http: HttpClient,) { }
  fetchAccount(): Observable<Account>{
    return this.http.get<Account>(this.Url);
 }
 
}