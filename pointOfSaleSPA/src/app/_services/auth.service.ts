import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Invoice } from '../_models/invoice';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  role: string;
  name: string;
  invoice: Invoice;
  id: number;
  createdInvoice: number;


constructor(private http: HttpClient, private router: Router) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const employee = response;
      if (employee) {
        localStorage.setItem('token', employee.token);
        this.decodedToken = this.jwtHelper.decodeToken(employee.token);
        this.name = this.decodedToken.unique_name.split('/')[0];
        this.role = this.decodedToken.unique_name.split('/')[1];
        this.id = this.decodedToken.nameid;
        console.log(this.decodedToken.nameid);
      }
    })
  );
}

loggedIn () {
  const token = localStorage.getItem('token');
  return this.jwtHelper.isTokenExpired(token);
}

logout () {
  localStorage.removeItem('token');
  this.router.navigate(['/home']);
}

initiateInvoice (invoice: any) {
  return this.http.post('http://localhost:5000/api/invoices/', invoice).pipe(
    map((response: any) => {
      this.createdInvoice = response.result;
      if (this.createdInvoice) {
        console.log(this.createdInvoice);
      }
    })
  );
}

}
