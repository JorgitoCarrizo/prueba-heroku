import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  NombreUsuario:string;


  constructor() {
    this.NombreUsuario = "";
   }
}
