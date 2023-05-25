import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.scss']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = 'https://localhost:5001/api/v1/'
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseUrl + 'not-found').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get404EmailError() {
    this.http.get(this.baseUrl + 'email-not-found').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }

  get401Error() {
    this.http.get(this.baseUrl + 'unauthorized-error').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + 'bad-request').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get400ValidationError() {
    this.http.post(this.baseUrl + 'add-model', {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    });
  }

  get500Error() {
    this.http.get(this.baseUrl + 'problem500').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  get500ServerError() {
    this.http.get(this.baseUrl + 'server-error').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  getDivideByZeroError() {
    this.http.get(this.baseUrl + 'divide-zero').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
