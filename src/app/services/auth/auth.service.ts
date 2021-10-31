import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IAuthRequest } from 'src/app/core/models/IAuthRequest';
import { IAuthResponse } from 'src/app/core/models/IAuthResponse';

import { filter } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService implements OnDestroy {
  onAuthStatusChanged: BehaviorSubject<boolean>;
  onAuthError: BehaviorSubject<void>;
  onSessionAboutToExpire: BehaviorSubject<number>;
  scheduler: Subscription;
  constructor(private router: Router) {

    this.onAuthStatusChanged = new BehaviorSubject(this.isAuthenticated() || false);
    this.onAuthError = new BehaviorSubject(null);
    this.onSessionAboutToExpire = new BehaviorSubject(99999);

    router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(e => {
      if ((e as NavigationStart).url !== '/auth') {
        return false;
      }
    });
  }
  ngOnDestroy(): void {

  }

  login(authRequest: IAuthRequest) {
    const admins = JSON.parse(localStorage.getItem('admin'));
    const superadmins = JSON.parse(localStorage.getItem('superadmin'));
    const customers = JSON.parse(localStorage.getItem('customers'));
    admins.forEach(admin => {
      if (admin.username === authRequest.username && admin.password === authRequest.password) {
        localStorage.setItem('role', 'admin');
        localStorage.setItem('token', Math.floor(Math.random() * 4000).toString());
        this.onAuthStatusChanged.next(true);
      }
      else{
        this.onAuthError.next()
      }
    })
  
    superadmins.forEach(superadmin => {
      if (superadmin.username === authRequest.username && superadmin.password === authRequest.password) {
        localStorage.setItem('role', 'superadmin');
        localStorage.setItem('token', Math.floor(Math.random() * 4000).toString());
        this.onAuthStatusChanged.next(true);
      }
      else{
        this.onAuthError.next()
      }
    });
    customers.forEach(customer => {
      if (customer.name === authRequest.username && customer.password === authRequest.password) {
        localStorage.setItem('role', 'customer');
        localStorage.setItem('token', Math.floor(Math.random() * 4000).toString());
        this.onAuthStatusChanged.next(true);
      }
      else{
        this.onAuthError.next()
      }
    });
  }

  logout() {
    localStorage.clear();
    this.onAuthStatusChanged.next(false);
    this.router.navigate(['/auth']);
    this.scheduler?.unsubscribe();
  }

  isRole = () => localStorage.getItem('role');
  isAuthenticated = () => !!localStorage.getItem('token');

}
