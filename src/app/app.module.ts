import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContactComponent } from "./contact/ContactComponent";
import { ProfiletudiantComponent } from './profiletudiant/profiletudiant.component';
import {FormsModule} from '@angular/forms';
import { ModifetudiantComponent } from './modifetudiant/modifetudiant.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EtudiantsService } from './services/etudiants.service';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PiedComponent,
    EtudiantComponent,
    Erreur404Component,
    ContactComponent,
    ProfiletudiantComponent,
    ModifetudiantComponent,
    ConnexionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EtudiantsService,{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
