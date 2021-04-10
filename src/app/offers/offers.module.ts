import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PricesComponent } from './components/prices/prices.component';
import { OffersComponent } from './container/products/offers.component';
import { ProductsRoutingModule } from './offers-routing.module';
import { ProductEffects } from './store/product.effects';
import * as fromProduct from './store/product.reducer';

@NgModule({
  declarations: [
    CharacteristicsComponent,
    PricesComponent,
    OffersComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects]),
    SharedModule
  ]
})
export class OffersModule { }
