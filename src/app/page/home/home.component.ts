import { R3BoundTarget } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ruta:RouterModule) { }

  ngOnInit(): void {
  }

}
