import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component:BrandComponent,
    path:'brand'
  },
  {
    component:CategoryComponent,
    path:'category'
  },
  {
    component:ProductDetailsComponent,
    path:'product'
  },
  {
    component:HomeComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
