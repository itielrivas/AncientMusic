import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsAuthService } from '../services/is-auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class IsAuthGuard implements CanActivate {

  constructor(private isAuth: IsAuthService,
              private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.isAuth.userIsAuth) {
        this.router.navigate(['inicio']);
      }
      return this.isAuth.userIsAuth();
    }
}
