import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ProductEditComponent } from './product-edit.component';

@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {

  canDeactivate(component: ProductEditComponent): boolean {
    if (component.isDirty) {
      const productName = component.product.productName || 'New Product';
      return confirm(`Navigate away and loose all changes to ${productName}?`);
    }
    return true;
  }

}