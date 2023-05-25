import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IWordReport } from '../model/word-report.model';

@Injectable({
  providedIn: 'root'
})
export class WordReportService {
  private baseUrl = environment.baseUrl + 'v1/admin/';
  constructor(private http: HttpClient,) { }
 fetchScannedWord(status:boolean){
  return this.http.get<IWordReport[]>(this.baseUrl+'reports/words/scanned/'+status); 
 }
 fetchLearnedWord(status:boolean){
  return this.http.get<IWordReport[]>(this.baseUrl+'reports/words/learned/'+status);
 }
 
}