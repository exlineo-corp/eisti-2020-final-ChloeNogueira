import { Component, OnInit } from '@angular/core';
import { Prfil } from '../modele/prfil';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeEtudiants: Array<Prfil>;
  //autreListeNew:any[];

  /*va pouvoir se loader et déloader dans la mémoir de l'appli*/
  constructor() {
  }

  //ce qui se passe à l'initialisation de la page
  ngOnInit() {
    // Peuplement de la variable dans NgOnInit
    
  }

}
