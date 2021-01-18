import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Dependencias/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {
usuarios:Usuario[];

  constructor( private usuarioserve:UsuarioService) { }

  async ngOnInit()  {
    var resultado =await this.usuarioserve.obtenerTodos();
    this.usuarios=resultado.personas; 
    console.log(this.usuarios);
  }

}
