import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddeventsComponent } from './components/addevents/addevents.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Register',component:RegisterComponent},
  {path:'About',component:AboutComponent},
  {path:'Login',component:LoginComponent},
  {path:'addevents',component:AddeventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
