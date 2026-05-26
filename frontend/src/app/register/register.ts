import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './register.html'
})
export class Register {
  userData = { name: '', email: '', password: '' };
  message = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.userData).subscribe({
      next: () => {
        alert('Conta criada! Redirecionando...');
        this.router.navigate(['/login']);
      },
      error: (err) => this.message = err.error.message || 'Erro ao cadastrar'
    });
  }
}