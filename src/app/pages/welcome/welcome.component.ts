import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'welcome-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  title = 'Seja Bem-Vindo(a)';
}
