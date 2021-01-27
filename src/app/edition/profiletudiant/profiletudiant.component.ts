import { Component, OnInit } from '@angular/core';
import { Prfil, PrfilI } from 'src/app/modele/prfil';

@Component({
  selector: 'app-profiletudiant',
  templateUrl: './profiletudiant.component.html',
  styleUrls: ['./profiletudiant.component.css']
})
export class ProfiletudiantComponent implements OnInit {

  profiletudiant:PrfilI = <PrfilI> {}; //Création d'un profil vide

  constructor() { }

  ngOnInit() {
    this.profiletudiant = new Prfil(); // Initialisation du profil
   
  }

  majEtudiant(){

  }

  annulerMaj(){
    this.profiletudiant =  new Prfil();
  }

}
