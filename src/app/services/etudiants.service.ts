import { Injectable } from '@angular/core';
import { Prfil, PrfilI } from '../modele/prfil';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {
  [x: string]: any;


  listeEtudiants: Array<PrfilI> = [];


  constructor(private http:HttpClient) {
    //Met à jour la liste étudiant avec une requête http
    this.http.get<Array<Prfil>>("/assets/data/etudiants.json").subscribe(
      data => {
        this.listeEtudiants = data;
      }
    )
   }

   //getEtudiants(){
     /**
      * Requête Ajax pour aller chercher les étudiants dans un fichier externe JSON
      * La requête elle-mêm est typée
      */
     //this.http.get<Array<PrfilI>>("/assets/data/etudiants.json").subscribe(
       //etu => {
         //console.log(etu);
         //this.listeEtudiants = etu;
         //this.listeEtudiants.next(etu);
       //}
     //);
   //}
}
