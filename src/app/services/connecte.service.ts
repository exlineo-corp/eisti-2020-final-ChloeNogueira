import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnecteService {

  statut:number = 0; //Statut de la personne connectée
  connexion:boolean = false; // La personne est-elle connectée ?

  constructor() { }
}
