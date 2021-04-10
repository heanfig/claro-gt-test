import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromActions from '../../store/product.actions';
import * as fromStore from '../../store/product.reducer';
import * as fromSelector from '../../store/products.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  
  offers$: Observable<any[]>= of([]);;
  characteristics$: Observable<any[]> = of([]);
  prices$: Observable<any[]>= of([]);

  /**
   * Creates an instance of OffersComponent.
   * @param {Store<fromStore.OfferState>} store
   * @memberof OffersComponent
   */
  constructor(private store: Store<fromStore.OfferState>) {
    this.store.dispatch(fromActions.requestLoadOffers());
    this.offers$ = this.store.select(fromSelector.offers).pipe(
      map( offers => offers.map( offer => offer.versions )),
      map( versions => versions.map( ([version]) => version ))
    )
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
  }

  ngOnInit(): void {}

  /**
   * Choose offer from HTMLEvent
   * @param {*} {value}
   * @memberof OffersComponent
   */
  chooseOffer({value}: any){
    this.characteristics$ = of(value);
    this.prices$ = of(value);
  }

}
