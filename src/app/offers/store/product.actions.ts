import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Offers } from '../models/offer';

// Usado, load de ofertas
export const requestLoadOffers = createAction(
  '[Product/JSON] Request Load Products'
);

export const loadOffers = createAction(
  '[Product/JSON] Load Products',
  props<{ products: Offers[] }>()
);

/*export const addProduct = createAction(
  '[Product/JSON] Add Product',
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  '[Product/JSON] Update Product',
  props<{ product: Update<Product> }>()
);

export const deleteProduct = createAction(
  '[Product/JSON] Delete Product',
  props<{ id: string }>()
);

export const searchProduct = createAction(
  '[Product/JSON] Search Products',
  props<{ searchQuery: string }>()
);*/
