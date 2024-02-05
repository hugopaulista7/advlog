import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private isLoggedIn = true;

  authenticate() {
    this.isLoggedIn = true;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
