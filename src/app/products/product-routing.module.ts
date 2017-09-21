import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';
import { ProductResolver } from './product-resolver.service';
import { ProductEditGuard } from './product-guard.service';

import { AuthGuard } from '../user/auth-guard.service';
import { ModifyDataGuard } from '../user/modify-data-guard.service';

const ROUTES = [
  {
    path: 'products',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: { product: ProductResolver }
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: { product: ProductResolver },
        canActivateChild: [ModifyDataGuard],
        canDeactivate: [ProductEditGuard],
        children: [
          {
            path: '',
            redirectTo: 'info',
            pathMatch: 'full'
          },
          {
            path: 'info',
            component: ProductEditInfoComponent
          },
          {
            path: 'tags',
            component: ProductEditTagsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ProductResolver,
    ProductEditGuard
  ]
})
export class ProductRoutingModule { }
