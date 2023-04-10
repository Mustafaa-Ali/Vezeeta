import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      return of(true);
    } else {
      alert('You must be logged in first');
      this.router.navigate(['/signIn']);
      return of(false);
    }
  }
}
