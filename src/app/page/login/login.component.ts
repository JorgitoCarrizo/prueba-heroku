import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { servicesVersion } from 'typescript';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutas:Router, private nombreServicio:UsuarioService) { }

  ngOnInit(): void {
  }
  presionar(){
    this.nombreServicio.NombreUsuario="lalla";
    var modelo=this;
    setTimeout(function() {
      
      modelo.rutas.navigate(['home']);
    }, 2000);
  }
}
