import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { EtudiantsService } from '../services/etudiants.service';
import { Prfil } from '../modele/prfil';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profiletudiant',
  templateUrl: './profiletudiant.component.html',
  styleUrls: ['./profiletudiant.component.css']
})
export class ProfiletudiantComponent implements OnInit {
  
  indexEtudiant = -1;

  @Input()
  profil: any;

  constructor(public servEtu:EtudiantsService, private routeParameters: ActivatedRoute) { }
  
  ngOnInit() {
    console.log(this.routeParameters);
    this.routeParameters.params.subscribe(
      parameters => {
        console.log('Paramètres de la route', parameters);

        if(parameters.truc){
          this.indexEtudiant =+parameters.truc;
          console.log(this.indexEtudiant);
        }
      }
    )
  }

}
