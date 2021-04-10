import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OffersComponent } from './container/products/offers.component';

const routes: Routes = [
  { path: '', component: OffersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
