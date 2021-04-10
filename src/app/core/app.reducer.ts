import { createReducer } from '@ngrx/store';


export const appFeatureKey = 'app';

export interface AppState {
}

export const initialState: AppState = {
};

export const reducer = createReducer(
  initialState,
);
