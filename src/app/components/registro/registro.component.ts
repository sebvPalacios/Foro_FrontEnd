import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
  providers: [UsuarioService]
})

export class RegistroComponent {

  frmRegistro!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService:UsuarioService,
    private router: Router
    ){
    this.frmRegistro = this.fb.group({

      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      rol:['usuario']

    });
  }

  onSubmit(){
    if(this.frmRegistro.valid){
      const nuevoUsuario = this.frmRegistro.value;
       
      this.usuarioService.crearUsuario(nuevoUsuario).subscribe({
        next: (res) => {
          console.log('Usuario creado: ', res);
          this.router.navigate(['/list']);
        },

        error: (err) => {
          console.error('error al crear usuario: ', err);
        }
      });
    }

  }
}
