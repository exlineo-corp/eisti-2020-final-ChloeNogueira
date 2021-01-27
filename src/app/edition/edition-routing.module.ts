import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfiletudiantComponent } from './profiletudiant/profiletudiant.component';
import { RouterModule } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';


const routes = [
  {path:"", component:AccueilComponent, children:[
    {path:"profiletudiant", component:ProfiletudiantComponent},
    {path:"utilisateurs", component:UtilisateursComponent},
    ]}
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class EditionRoutingModule { }
