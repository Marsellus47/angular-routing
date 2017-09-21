import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UserRoutingModule } from './user-routing.module';
import { ModifyDataGuard } from './modify-data-guard.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    ModifyDataGuard
  ]
})
export class UserModule { }
