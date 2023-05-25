import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { EventManager, EventWithContent } from '../util/event-manager.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private eventManager: EventManager, private router: Router, private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: HttpErrorResponse) => {
          // if (!(err.status === 401 && (err.message === '' || err.url?.includes('api/account')))) {
          //   this.eventManager.broadcast(new EventWithContent('jhipsterSampleApplicationApp.httpError', err));
          // }
          if (err) {
            console.log(err.status)
            switch (err.status) {

              case 400:
                //validation error on model object with annotation
                if (err.error.errors) {
                  const modalStateErrors = [];
                  for (const key in err.error.errors) {
                    if (err.error.errors[key]) {
                      modalStateErrors.push(err.error.errors[key])
                    }
                  }
                  throw modalStateErrors.flat();
                } else if (err.error && err.error.detail) {
                  const modalStateErrors = [];
                  modalStateErrors.push(err.error.detail);
                  throw modalStateErrors;
                } else if (typeof (err.error) === 'object') {
                  this.toastr.error(err.statusText, err.status ? '' : '');
                } else {
                  this.toastr.error(err.error, err.status ? '' : '');
                }
                break;
              case 401:
                const navigationExtrass: NavigationExtras = {state: {error: err.error}}                
                this.router.navigateByUrl('/unauthorized-error', navigationExtrass);
                break;
              case 403:
                this.toastr.error(err.statusText, err.status ? '' : '');
                break;
              case 404:
                this.toastr.error(err.statusText, err.status ? '' : '');
                // this.router.navigateByUrl('/not-found');
                break;
              case 500:
                this.toastr.error(err.statusText, err.status ? '' : '');
                const navigationExtras: NavigationExtras = { state: { error: err.error } }
                this.router.navigateByUrl('/server-error', navigationExtras);
                break;
              default:
                this.toastr.error('Something unexpected went wrong');
                console.log(err);
                break;
            }
          }
        },
      })
    );
  }
}