import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCartActions from '../../../header/store/header.actions';
import * as fromActions from '../../store/product.actions';
import * as fromStore from '../../store/product.reducer';
import * as fromSelector from '../../store/products.selectors';
import { Offers } from '../../models/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersComponent implements OnInit {

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  offers$: Observable<Offers[]>;

  constructor(private store: Store<fromStore.OfferState>) {
    this.store.dispatch(fromActions.requestLoadOffers());
    this.offers$ = this.store.select(fromSelector.offers);
    this.isLoading$ = this.store.select(fromSelector.isLoading);
    this.error$ = this.store.select(fromSelector.error);
  }

  ngOnInit(): void { }

  addProductCart(product: Offers): void {
    this.store.dispatch(fromCartActions.addToCart());
  }

}
