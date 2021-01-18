import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Dependencias/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-modificar',
  templateUrl: './usuario-modificar.component.html',
  styleUrls: ['./usuario-modificar.component.css'],
})
export class UsuarioModificarComponent implements OnInit {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  usuarios: Usuario;

  constructor(
    private usuarioserve: UsuarioService,
    private router: Router,
    private activateroute: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.activateroute.queryParams.subscribe((parametro) => {
      this.id = parametro["id"];
      this.nombre = parametro["nombre"];
      this.apellido = parametro["apellido"];
      this.edad = parametro["edad"];
    });
    this.usuarios = await this.usuarioserve.obtenerPorId(this.id);
  }

  async guardar() {
    var usuario = new Usuario();
    usuario.nombre = this.nombre;
    usuario.apellido = this.apellido;
    usuario.edad = this.edad;
    usuario.id = this.id;
    await this.usuarioserve.editar(usuario);
    this.router.navigate(["/usuario-listar"]);
  }

  async borrar() {
    await this.usuarioserve.eliminar(this.id);
    this.router.navigate(["/usuario-listar"]);
  }
}
