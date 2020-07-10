<<<<<<< HEAD
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { FaqComponent } from './home/faq/faq.component';
import { AboutComponent } from './home/about/about.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { IsAuthGuard } from './guards/is-auth.guard';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToInicio = () => redirectUnauthorizedTo(['inicio']);

const routes: Routes = [
  { path: 'home', component: LandingComponent, canActivate: [IsAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [IsAuthGuard] },
  { path: 'inicio', component: HomeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: '', component: LandingComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
>>>>>>> 423064f... Version 2.0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
