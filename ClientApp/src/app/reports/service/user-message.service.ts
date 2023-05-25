import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { map, Observable } from 'rxjs';

import { createRequestOption } from 'src/app/core/request/request-util';
import { environment } from 'src/environments/environment';
import { IUserMessage } from '../model/user-message.model';

export type EntityArrayResponseType = HttpResponse<IUserMessage[]>;

@Injectable({

  providedIn: 'root'

})
export class UserMessageService {

  protected resourceUrl = environment.baseUrl + 'v1/admin/contact-us';
  // protected resourceUrl1 = environment.baseUrl + 'v1/admin/contact-us/fiterbydate';
  protected resourceUrl2 = environment.baseUrl + 'v1/admin/contact-us/all';

  constructor(private http: HttpClient) { }

  query(req?: any): Observable<HttpResponse<IUserMessage[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUserMessage[]>(this.resourceUrl, { params: options, observe: 'response' }).pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));;
  }

  queryAll(req?: any): Observable<HttpResponse<IUserMessage[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUserMessage[]>(this.resourceUrl2, { params: options, observe: 'response' }).pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((message: IUserMessage) => {
        message.createdDateMobile = message.createdDateMobile ? dayjs(message.createdDateMobile) : undefined;
      });
    }
    return res;
  }

}
