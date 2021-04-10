import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Offers } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  load(): Observable<Offers[]> {
    return this.http.get<Offers[]>('assets/data/ofertas.json');
  }

  /*search(searchQuery: string): Observable<Product[]> {
    return this.load().pipe(
      map((list: Product[]) => list.filter((value) => value.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1))
    );
  }*/
}
