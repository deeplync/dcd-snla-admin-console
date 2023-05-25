import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as dayjs from 'dayjs';

import { environment } from 'src/environments/environment';
import { createRequestOption } from 'src/app/core/request/request-util';
import { ICustomer } from '../customer.model';

export type EntityResponseType = HttpResponse<ICustomer>;
export type EntityArrayResponseType = HttpResponse<ICustomer[]>;

@Injectable({ providedIn: 'root' })
export class CustomerService {
  protected resourceUrl = environment.baseUrl + 'v1/admin/customers';

  constructor(private http: HttpClient) { }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ICustomer[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.createdDate = res.body.createdDate ? dayjs(res.body.createdDate) : undefined;
      res.body.lastAccessedDate = res.body.lastAccessedDate ? dayjs(res.body.lastAccessedDate) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((word: ICustomer) => {
        word.createdDate = word.createdDate ? dayjs(word.createdDate) : undefined;
        word.lastAccessedDate = word.lastAccessedDate ? dayjs(word.lastAccessedDate) : undefined;
      });
    }
    return res;
  }
}
