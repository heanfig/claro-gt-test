import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import * as fromStore from '../../store/product.reducer';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricesComponent{

  @Input('data') prices$: Observable<any>;

  constructor(private store: Store<fromStore.OfferState>) {
    this.prices$ = of();
  }

}
