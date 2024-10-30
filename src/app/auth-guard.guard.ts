import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

export const authGuardGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const token = localStorage.getItem('token');
  if (token && token === 'any_token') {
    return true;
  }
  localStorage.removeItem('token');
  window.location.href = '/login';
  return false;
};
