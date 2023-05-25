import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as dayjs from 'dayjs';

import { environment } from 'src/environments/environment';
import { createRequestOption } from 'src/app/core/request/request-util';
import { IWord } from '../word.model';

export type EntityResponseType = HttpResponse<IWord>;
export type EntityArrayResponseType = HttpResponse<IWord[]>;

@Injectable({ providedIn: 'root' })
export class WordService {
  protected resourceUrl = environment.baseUrl + 'v1/admin/words';
  protected resourceUrl1 = environment.baseUrl + 'v1/admin/words/by-id';
  protected mediaBaseUrl= environment.baseUrl + 'v1/admin/media/';
  protected mediaBaseUrl1= environment.baseUrl + 'v1/admin/media/by-id';
  constructor(private http: HttpClient) { }

  update(id:string,word: IWord): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(word);
    // return this.http
    //   .put<IWord>(`${this.resourceUrl}/${id}`, copy, { observe: 'response' })
    //   .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
      return this.http.put<IWord>(`${this.resourceUrl}/${id}`, word, { observe: 'response' })
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IWord[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  find(id: string): Observable<EntityResponseType> {
    return this.http
      .get<IWord>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }
  getMediaById(id:string):Observable<any>{
    return this.http.get<any>(this.resourceUrl+'/'+id+'/medias');
  }
  updateMedia(wordid:string,data:any,id:string){
    return this.http.put(this.resourceUrl+'/'+wordid+'/medias/'+id,data,{
      reportProgress: true,
      observe: 'events'
    })
  }
  protected convertDateFromClient(word: IWord): IWord {
    return Object.assign({}, word, {
      date: word.createdDateTime?.isValid() ? word.createdDateTime.toJSON() : undefined,
    });
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.createdDateTime = res.body.createdDateTime ? dayjs(res.body.createdDateTime) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((word: IWord) => {
        word.createdDateTime = word.createdDateTime ? dayjs(word.createdDateTime) : undefined;
      });
    }
    return res;
  }
}
