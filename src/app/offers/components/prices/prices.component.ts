import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Price } from '../../models/price';

import * as fromStore from '../../store/product.reducer';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricesComponent{

  @Input('data') prices$: Observable<any>;

  /**
   * Creates an instance of PricesComponent.
   * @param {Store<fromStore.OfferState>} store
   * @memberof PricesComponent
   */
  constructor(private store: Store<fromStore.OfferState>) {
    this.prices$ = of();
  }

  /**
   * Accesor to get prices from Input and observable
   * @readonly
   * @type {Observable<Price[]>}
   * @memberof PricesComponent
   */
  get prices(): Observable<Price[]> {
    return this.prices$.pipe(
      map( ({ productOfferingPrices }): any => productOfferingPrices ),
      map( prices => prices.flatMap( ({versions}:any) => versions ) ),
      map( prices => prices.map( ({ id, name, price }:any) => ({ id, name, price })) ),
    );
  }

}
