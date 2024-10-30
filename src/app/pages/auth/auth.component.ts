import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'auth-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  title = 'Autenticação';

  // valid credentials for authentication simulation
  cpf = '00000000000';
  password = '123';

  cpfErrorMessage = '';
  passwordErrorMessage = '';

  authForm = new FormGroup({
    cpf: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onlyNumbers(cpf: string) {
    let hasOnlyNumbers = cpf.toString().match(/\D/gm);
    return hasOnlyNumbers ? 'CPF inválido! Informe somente os números' : '';
  }

  onChangeCPF(eventStr: string) {
    this.cpfErrorMessage = this.onlyNumbers(eventStr);
  }
  onChangePassword() {
    this.passwordErrorMessage = '';
  }
  handleSubmit() {
    const hasCpfError = !!this.authForm?.controls?.cpf?.errors;
    const hasPasswordError = !!this.authForm?.controls?.password?.errors;
    if (this.authForm.value.cpf && this.authForm.value.cpf?.length < 11) {
      this.cpfErrorMessage = 'CPF inválido! Informe somente os números';
      return;
    }
    if (hasCpfError) {
      this.cpfErrorMessage = 'CPF é obrigatório';
    }

    if (hasPasswordError) {
      this.passwordErrorMessage = 'Senha é obrigatória';
    }

    if (
      this.cpf === this.authForm.value.cpf &&
      this.password === this.authForm.value.password &&
      !hasPasswordError &&
      !hasCpfError
    ) {
      // Simulate an successful authentication
      localStorage.setItem('token', 'any_token');
      this.router.navigate(['welcome']);
      return;
    } else if (!hasPasswordError && !hasCpfError) {
      // Simulate failed authentication
      console.log('Error');
      alert('CPF ou senha inválidos!');
    }
  }
}
