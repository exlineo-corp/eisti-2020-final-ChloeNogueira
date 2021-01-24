import { Injectable } from '@angular/core';
import { Prfil } from '../modele/prfil';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {


  listeEtudiants: Array<Prfil> = [];


  constructor(private http:HttpClient) {
    /* Met à jour la liste étudiant avec une requête http*/
    this.http.get<Array<Prfil>>("/assets/data/etudiants.json").subscribe(
      data => {
        this.listeEtudiants = data;
      }
    )
   }
}
