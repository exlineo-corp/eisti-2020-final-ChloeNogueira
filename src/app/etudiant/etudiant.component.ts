import { Component, Input, OnInit } from '@angular/core';
import { EtudiantsService } from '../services/etudiants.service';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(public servEtu:EtudiantsService) {}

  ngOnInit(): void {
    //this.servEtu.getEtudiants(); //Récupère les étudiants lorsqu'on arrive sur la page des étudiants
  }

}

