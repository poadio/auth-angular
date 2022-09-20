import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Auth } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  session = this.auth.session;
  constructor(private readonly auth: Auth, public router: Router) {}

  canActivate(): boolean {
    if (!this.session) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
