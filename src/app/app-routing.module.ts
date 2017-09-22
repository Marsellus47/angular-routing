import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategy } from './selective-strategy.service';
import { WelcomeComponent } from './home/welcome.component';
import { AuthGuard } from './user/auth-guard.service';

const ROUTES = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: 'app/products/product.module#ProductModule',
    data: { preload: false }
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { /*enableTracing: true,*/ preloadingStrategy: SelectiveStrategy }),
  ],
  providers: [
    SelectiveStrategy
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
