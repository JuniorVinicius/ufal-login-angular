import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AuthComponent,WelcomeComponent],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'Autenticação';
}
