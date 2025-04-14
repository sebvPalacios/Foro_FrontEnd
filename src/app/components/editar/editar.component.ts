import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
  providers: [UsuarioService]
})
export class EditarComponent {
  frmEditar!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.frmEditar = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
      rol: ['Usuario']  // o mantené el rol del usuario existente
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.usuarioService.getUsuarioDetalles(this.id).subscribe(usuario => {
      this.frmEditar.patchValue(usuario);  // Carga los datos en el formulario
    });
  }

  onSubmit() {
    if (this.frmEditar.valid) {
      const datosActualizados = this.frmEditar.value;
      this.usuarioService.actualizarUsuario(this.id, datosActualizados).subscribe({
        next: res => this.router.navigate(['/list']),
        error: err => console.error('Error al actualizar usuario', err)
      });
    }
  }
}
