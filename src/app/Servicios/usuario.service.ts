import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../Dependencias/respuesta';


import { Usuario } from '../Dependencias/usuario';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  obtenerTodos(): Promise<Respuesta> {
    return this.http
      .get<Respuesta>("http://localhost:3000/persona")
      .toPromise();
  }
  guardar(usuario: Usuario): Promise<void> {
    return this.http
      .post<void>('http://localhost:3000/persona', usuario)
      .toPromise();
  }

  editar(usuarios: Usuario): Promise<void> {
    return this.http
      .put<void>('http://localhost:3000/persona/', usuarios)
      .toPromise();
  }
  eliminar(id: number): Promise<void> {
    return this.http
      .delete<void>('http://localhost:3000/persona/' + id)
      .toPromise();
  }

  obtenerPorId(id: number): Promise<Usuario> {
    return this.http
      .get<Usuario>('http://localhost:3000/persona/' + id)
      .toPromise();
  }
}
