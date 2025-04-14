import { Component } from '@angular/core';
import { PublicacionService } from '../../services/publicacion.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [PublicacionService]
})
export class MenuComponent {

  publicaciones: any[] = [];

  constructor(private publicacionService: PublicacionService) {}

  ngOnInit(): void {
    this.publicacionService.getPublicaciones().subscribe(data => {
      this.publicaciones = data;
    });
  }

}
