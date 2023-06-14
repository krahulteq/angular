import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  if (isAuthenticated) {
    return true;
  } else {
    return false;
  }
};
