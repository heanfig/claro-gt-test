import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import * as fromCartActions from '../../../header/store/header.actions';
import * as fromActions from '../../store/product.actions';
import * as fromStore from '../../store/product.reducer';
import * as fromSelector from '../../store/products.selectors';
import { Offers } from '../../models/offer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacteristicsComponent{

  @Input('data') characteristics$: Observable<any>;

  constructor(private store: Store<fromStore.OfferState>) {
    this.characteristics$ = of();
  }

}
