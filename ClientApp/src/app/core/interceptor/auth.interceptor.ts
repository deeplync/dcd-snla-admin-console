import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // const token: string | null = this.localStorageService.retrieve('authenticationToken') ?? this.sessionStorageService.retrieve('authenticationToken');
    const token: string | null = localStorage.getItem("authenticationToken");
    // const token: string | null = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJpc3MiOiJodHRwczovL2FkYjJjc25sYW9yZy5iMmNsb2dpbi5jb20vMjViNzgwOTktNzVlZS00ZmYxLTk3MWYtMDZjMmQ1YTU2ZjMzL3YyLjAvIiwiZXhwIjoxNjQ2ODQxODI4LCJuYmYiOjE2NDY4MzgyMjgsImF1ZCI6IjMwNmNlNDA3LTFjZjMtNGI2Ny1hZDVkLWU2MGRiYWUxOTU0ZSIsIm9pZCI6ImI1NTNkNmRkLTAyYjgtNGVjMS1iYWJkLWM1NmZkNjhlNzBlYSIsInN1YiI6ImI1NTNkNmRkLTAyYjgtNGVjMS1iYWJkLWM1NmZkNjhlNzBlYSIsInRmcCI6IkIyQ18xX1NpZ25Jbl9VcCIsInNjcCI6ImFjY2Vzc19hc191c2VyIiwiYXpwIjoiNzZiODdmYjEtZjI5My00YTA0LTljODItNGYzMmU3OTI5YjY0IiwidmVyIjoiMS4wIiwiaWF0IjoxNjQ2ODM4MjI4fQ.PPB_KremAcV_0lQmETOVDrXg62uVUjBHxRQWhQJKv2ZlnsozpXFDCT8wnwBkthCb7tU9eF0NBssMXCXEk40JCeL6Vr60mGUDfS0Fa2u29qLrT8IR9SaD-X-vhQGJEU0pdg4fHBuA8cKx2R8g6W76Skdy052VyqSS0Ljuh3k6CaRLN9D_cM3R-4B9-jDMsQYAHyJLry3L6vipYYOdk-efjDOFEl7I1xMGFKmnwsjkoRYOV7uw_Khsu2C1_u80vGMG8BsXuCgqNKigqkITwTtIuRvwGrcSErEJdKzi2W5nViErSaI_zCzjtfkN9jHoZnLKz-I7N0OlZS-eMobSHDWQbw";
    if (token) {
      localStorage.setItem("authenticationToken", token)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}