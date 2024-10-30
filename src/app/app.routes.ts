import { Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: AuthComponent,
  },
  {
    path: '',
    title: 'Login',
    component: AuthComponent,
  },
  {
    path: 'welcome',
    title: 'Boas vindas',
    component: WelcomeComponent,
		canActivate: [authGuardGuard],
  },
];
