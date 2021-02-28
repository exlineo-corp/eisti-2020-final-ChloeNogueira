import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from "./contact/ContactComponent";
import { Erreur404Component } from './erreur404/erreur404.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ProfiletudiantComponent } from './profiletudiant/profiletudiant.component';
import { ModifetudiantComponent } from './modifetudiant/modifetudiant.component';
import { EditionGuard } from './services/edition.guard';
import { ConnexionComponent } from './connexion/connexion.component';


const routes: Routes = [
  //Si pas de route tu vas dans accueil component
  {path:"", component:AccueilComponent},
  {path:"etudiant", component:EtudiantComponent},
  {path:"profiletudiant", component:ProfiletudiantComponent},
  {path:"profiletudiant/:truc", component:ProfiletudiantComponent},
  {path:"modifetudiant/:machin", component:ModifetudiantComponent}, // /:machin/:truc
  {path:"contact",component:ContactComponent},
  {path:"connexion",component:ConnexionComponent},
  {path:"edition",loadChildren:()=>import('./edition/edition.module').then(e=>e.EditionModule), canActivate:[EditionGuard], canLoad:[EditionGuard]}, //cette route peut s'activer que si la guard de canActive Edition renvoie true
  {path:"**", component:Erreur404Component}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
