import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStore from './product.reducer';

const offerSelector = createFeatureSelector<fromStore.OfferState>(fromStore.productsFeatureKey);

export const isLoading = createSelector(offerSelector, fromStore.selectIsLoading);
export const offers = createSelector(offerSelector, fromStore.selectAll);
export const error = createSelector(offerSelector, fromStore.selectError);
