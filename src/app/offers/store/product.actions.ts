import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Offers } from '../models/offer';

// Usado, load de ofertas
export const requestLoadOffers = createAction(
  '[Product/JSON] Request Load Products'
);

export const loadOffers = createAction(
  '[Product/JSON] Load Products',
  props<{ offers: Offers[] }>()
);

