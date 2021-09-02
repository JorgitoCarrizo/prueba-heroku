import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'error',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
