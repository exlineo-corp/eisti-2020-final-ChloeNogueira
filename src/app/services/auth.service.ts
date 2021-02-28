import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prfil, PrfilI } from '../modele/prfil';
import { ConnecteService } from './connecte.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  profil:PrfilI;

  constructor(private http:HttpClient, private connectServ:ConnecteService) { }

  gogoId(connexion:{id:any, mdp:string}){
    this.http.get<PrfilI>(`/assets/ids/${connexion.id}@${connexion.mdp}.json`).subscribe(
      data => {
        console.log(data);
        this.connectServ.connexion = true;
        // Sauvegarde du statut de la personne connectée
        if(data['statut']) this.connectServ.statut = data['statut'];
        // Token ajouté à l'intercepteur
        if(data['token']) this.connectServ.token = data['token'];
        this.profil = data;
      },
      erreur => {
        console.log(erreur);
        this.connectServ.connexion = false;
        this.connectServ.statut = 0;
        this.profil = <PrfilI>{};
      }
    )
  }
}
