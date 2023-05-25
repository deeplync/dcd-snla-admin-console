import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ISettings } from '../model/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private baseUrl = environment.baseUrl + 'v1/admin/settings';
  constructor(private http: HttpClient,) { }
  fetchAll(): Observable<{}>{
    return this.http.get<ISettings[]>(this.baseUrl);
 }
 update(applicationData: ISettings): Observable<{}> {
   return this.http.put(this.baseUrl, applicationData)
 }
}
