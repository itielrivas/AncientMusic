import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { InicioComponent } from './home/inicio/inicio.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ContactComponent } from './home/contact/contact.component';
import { FaqComponent } from './home/faq/faq.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
=======
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

>>>>>>> 423064f... Version 2.0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    FaqComponent,
    AboutComponent,
=======
    LandingComponent,
    LoginComponent,
    RegisterComponent,
>>>>>>> 423064f... Version 2.0
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
>>>>>>> 423064f... Version 2.0
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
