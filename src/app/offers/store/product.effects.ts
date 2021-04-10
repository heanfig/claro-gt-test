// import { products } from './products.selectors';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime, delay } from 'rxjs/operators';

import { DataService } from '../service/data.service';
import { loadOffers, requestLoadOffers } from './product.actions';

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private service: DataService) {}

  loadOffers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestLoadOffers),
      switchMap(action =>
        this.service.load().pipe(
          delay(1000),
          map(offers => {;
            return loadOffers({offers})
          })
      ))
    )
  );

  /*searchProduct$ = createEffect(() =>
      this.actions$.pipe(
        ofType(searchProduct),
        switchMap(action => this.service.search(action.searchQuery)
        .pipe(
          delay(1000),
          map(data => loadProducts({products: data}))
        ))
      )
  );*/
}
