import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { WordCount } from '../model/word-count.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  protected resourceUrl = environment.baseUrl + 'v1/admin/reports/';
  constructor(private http: HttpClient) { }

  getWordCount(): Observable<WordCount> {
    return this.http.get<WordCount>(this.resourceUrl + 'words-count')
  }

  activeUserReport() {
    return this.http.get<string[]>(this.resourceUrl + 'active-users');
  }
  nationalityReport() {
    return this.http.get(this.resourceUrl + 'nationality');
  }
  registeredUserReport() {
    return this.http.get<string[]>(this.resourceUrl + 'registered-users');
  }

  registrationCount() {
    return this.http.get<number>(this.resourceUrl + 'registered-users-per-month');
  }
}
