import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { EtudiantsService } from '../services/etudiants.service';
import { Prfil } from '../modele/prfil';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifetudiant',
  templateUrl: './modifetudiant.component.html',
  styleUrls: ['./modifetudiant.component.css']
})
export class ModifetudiantComponent implements OnInit {

  @Input()
  modifformulaire:any;

  indexEtudiant = -1;

  constructor(public servEtu:EtudiantsService, private routeParameters: ActivatedRoute) { }

  ngOnInit() {

    this.modifformulaire = {
      nom:'',
      prenom:'',
      promo:'',
      mail:'',
      specialites:'',
    }
    

    this.routeParameters.params.subscribe(
      parameters => {
        if(parameters.machin){
          this.indexEtudiant =+parameters.machin;
        }
      }
    )
  }

 

  onSubmit() { 
    console.log(this.modifformulaire.nom); 
    this.servEtu.listeEtudiants[this.indexEtudiant].nom = this.modifformulaire.nom;
    this.servEtu.listeEtudiants[this.indexEtudiant].prenom = this.modifformulaire.prenom;
    this.servEtu.listeEtudiants[this.indexEtudiant].promo = this.modifformulaire.promo;
    this.servEtu.listeEtudiants[this.indexEtudiant].mail = this.modifformulaire.mail;
  }

}
