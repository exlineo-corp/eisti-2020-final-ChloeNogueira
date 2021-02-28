import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnecteService {

  statut:number //Statut de la personne connectée
  connexion:boolean  // La personne est-elle connectée ?
  token: string;
  constructor() { }
}
