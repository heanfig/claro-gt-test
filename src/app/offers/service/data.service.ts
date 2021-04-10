import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Offers } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Creates an instance of DataService.
   * @param {HttpClient} http
   * @memberof DataService
   */
  constructor(private http: HttpClient) { }

  /**
   * Load static file
   * @returns {Observable<Offers[]>}
   * @memberof DataService
   */
  load(): Observable<Offers[]> {
    return this.http.get<Offers[]>('assets/data/ofertas.json');
  }
  
}
