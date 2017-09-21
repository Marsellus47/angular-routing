import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';

@Injectable()
export class ModifyDataGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsAdmin();
  }

  checkIsAdmin(): boolean {
    if(this.authService.currentUser.isAdmin) {
      return true;
    }

    alert('Only administrator can change data');
    this.router.navigate(['']);
    return false;
  }
}