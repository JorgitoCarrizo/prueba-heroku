import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nombreUSuario:UsuarioService) {
    this.usuarioActual = nombreUSuario.NombreUsuario;
   }

  usuarioActual:string;

  ngOnInit(): void {
    
  }

  

}
