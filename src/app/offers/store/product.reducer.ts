import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Offers } from '../models/offer';
import * as OffersActions from './product.actions';

export const productsFeatureKey = 'products';

export interface OfferState extends EntityState<Offers> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Offers> = createEntityAdapter<Offers>();

export const initialState: OfferState = adapter.getInitialState({
  isLoading: true,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(OffersActions.loadOffers,
    (state, action) => adapter.setAll(action.offers, {
        ...state,
        isLoading: false
    })
  ),
  on(OffersActions.requestLoadOffers,
    (state, action) => adapter.setAll([], {
      ...state,
      isLoading: true
  })
  )
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectIsLoading = (state: OfferState) => state.isLoading;
export const selectError = (state: OfferState) => state.error;
