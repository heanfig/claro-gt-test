import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromStore from '../../store/product.reducer';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacteristicsComponent{

  @Input('data') characteristics$: Observable<any>;

  /**
   * Creates an instance of CharacteristicsComponent.
   * @param {Store<fromStore.OfferState>} store
   * @memberof CharacteristicsComponent
   */
  constructor(private store: Store<fromStore.OfferState>) {
    this.characteristics$ = of();
  }

  /**
   * Accesor for get Characteristics from Object
   * @readonly
   * @type {Observable<string[]>}
   * @memberof CharacteristicsComponent
   */
  get characteristics(): Observable<string[]>{
    return this.characteristics$.pipe(
      map(({characteristics}:any) => characteristics.map( (feature : any) => feature.id ))
    );
  }

}
