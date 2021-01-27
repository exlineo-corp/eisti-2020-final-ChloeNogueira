import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfiletudiantComponent } from './profiletudiant/profiletudiant.component';
import { EditionRoutingModule } from './edition-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfiletudiantComponent, AccueilComponent, UtilisateursComponent],
  imports: [
    CommonModule,
    EditionRoutingModule,
    FormsModule
  ]
})
export class EditionModule { }
