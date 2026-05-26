//Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 👈 Importa o cliente HTTP

@Injectable({
  providedIn: 'root',
})
export class AuthService { // 👈 Ajustado o nome para AuthService (padrão do Angular)
  
  // A URL onde o seu NestJS está rodando
  private apiUrl = 'http://localhost:3000/auth';
  
  // Essa variável vai guardar o nome do usuário logado para exibir no Dashboard
  public userName: string = '';

  constructor(private http: HttpClient) {} // 👈 Injeta o HttpClient no serviço

  // Função que envia o e-mail e senha para o backend validar
  login(data: any) {
    return this.http.post<{ name: string }>(`${this.apiUrl}/login`, data);
  }

  // Função que envia nome, e-mail e senha para criar uma conta nova
  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}