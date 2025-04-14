import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UsuarioService]
})
export class LoginComponent {

  frmLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.frmLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.frmLogin.valid) {
      const { correo, password } = this.frmLogin.value;

      // Obtenemos todos los usuarios
      this.usuarioService.getUsuarios().subscribe({
        next: (usuarios: Usuario[]) => {
          // Buscamos si existe un usuario con el correo y la contraseña ingresados
          const usuarioEncontrado = usuarios.find(usuario => usuario.correo === correo && usuario.password === password);

          if (usuarioEncontrado) {
            console.log('Login exitoso', usuarioEncontrado);
            // Redirigir a la lista de usuarios o a la página principal
            this.router.navigate(['/menu']);
          } else {
            console.error('Usuario o contraseña incorrectos');
          }
        },
        error: (err) => {
          console.error('Error al obtener los usuarios', err);
        }
      });
    }
  }

}
