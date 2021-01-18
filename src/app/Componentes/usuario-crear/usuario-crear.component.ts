import { Component, OnInit, } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Usuario } from 'src/app/Dependencias/usuario';
import { Router  } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})

export class UsuarioCrearComponent implements OnInit {
  usuario:Usuario[]=[];
  form:FormGroup; 
  enviado: boolean;

  constructor(private fb: FormBuilder,private router:Router,
              private serveusuario:UsuarioService){
      this.form = fb.group({
        nombre: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(4)]],
        apellido:['', [Validators.required]],
        edad:['', [Validators.required]],
      }) 
 }

  get f() { return this.form.controls; }

  async guardar(){

    this.enviado = true;

    if (this.form.valid) {

      var usuario = <Usuario>this.form.value;

      await this.serveusuario.guardar(usuario);

      this.router.navigate(['/usuario-listar'])

    }

  }
  ngOnInit(): void {
  }

}
