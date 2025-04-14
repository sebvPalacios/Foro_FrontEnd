import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private apiUrl = 'http://ip172-18-0-8-cvum7tqim2rg00ddvqr0-8080.direct.labs.play-with-docker.com/publicaciones';

  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<Publicacion[]> {
      return this.http.get<Publicacion[]>(this.apiUrl);
    }
}
