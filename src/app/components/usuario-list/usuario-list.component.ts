import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css',
  providers: [UsuarioService]
})

export class UsuarioListComponent {
  usuarios!: Usuario[];
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;
    })
  }

  onUsuarioSelected(usuario:Usuario){
    this.router.navigate([`list`, usuario.id]);
  }
} 
