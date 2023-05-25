import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/country.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private Url = environment.baseUrl + 'v1/admin/countries';
  constructor(private http: HttpClient,) { }
  fetchAll(): Observable<Country[]>{
    return this.http.get<Country[]>(this.Url);
 }
 
}