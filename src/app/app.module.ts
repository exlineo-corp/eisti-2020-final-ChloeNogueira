import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ContactComponent } from './contact/contact.component';
import { ProfiletudiantComponent } from './profiletudiant/profiletudiant.component';
import {FormsModule} from '@angular/forms';
import { ModifetudiantComponent } from './modifetudiant/modifetudiant.component';
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
    ModifetudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
