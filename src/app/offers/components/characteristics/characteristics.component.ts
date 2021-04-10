import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromStore from '../../store/product.reducer';

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
