import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../_models/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  baseUrl = 'http://localhost:5000/api/item/accept';


constructor(private http: HttpClient) { }

addItem(model: any) {
  return this.http.post(this.baseUrl , model)
  .pipe(
    map((response: any) => {
      const item = response;
      if (item) {
        console.log('succeeded');
      }
    })
  );
}

}
