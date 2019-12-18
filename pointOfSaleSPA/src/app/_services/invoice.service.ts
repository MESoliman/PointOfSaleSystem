import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../_models/invoice';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseUrl = 'http://localhost:5000/api/invoices/';

constructor(private http: HttpClient) { }

getInvoices(): Observable<Invoice[]> {
  return this.http.get<Invoice[]>(this.baseUrl, httpOptions);
}

getInvoice(id): Observable<Invoice> {
  return this.http.get<Invoice>(this.baseUrl + id);
}

}