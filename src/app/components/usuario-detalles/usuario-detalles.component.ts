import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detalles',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './usuario-detalles.component.html',
  styleUrl: './usuario-detalles.component.css',
  providers: [UsuarioService]
})

export class UsuarioDetallesComponent {
  usuario!: Usuario;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,  // Importamos ActivatedRoute para acceder a los parámetros de la URL
    private usuarioService: UsuarioService,   // Servicio para obtener los detalles del usuario
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!; // Extraemos el ID desde los parámetros de la URL
      this.getUsuarioDetalles();    // Llamamos al servicio para obtener los detalles del usuario
    });
  }

  getUsuarioDetalles(){
    this.usuarioService.getUsuarioDetalles(this.id).subscribe(usuario => {
      this.usuario = usuario;
    })
  }

  irAEditar() {
    this.router.navigate(['editar', this.id]);
  }
}
