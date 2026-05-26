import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dashboard.html'
})
export class Dashboard{
  userName = '';

  constructor(private authService: AuthService, private router: Router) {
    this.userName = this.authService.userName;
    // Se tentarem acessar sem logar, manda de volta pro login
    if (!this.userName) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.userName = '';
    this.router.navigate(['/login']);
  }
}