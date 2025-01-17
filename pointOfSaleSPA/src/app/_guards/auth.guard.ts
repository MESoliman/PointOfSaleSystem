import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(): boolean {
    /*if (this.authService.loggedIn()) {
      return true;
    }
    console.log('not authorized');
    this.router.navigate(['/home']);
    return false;*/
    return true;
  }
}
