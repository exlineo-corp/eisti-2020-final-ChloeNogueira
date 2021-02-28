import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any;

  constructor() { }

  ngOnInit() {
    this.contact = {
      nom:'',
      email:'',
      sujet:'',
      message:'',

    }
  }

  suiviInput(){
    console.log(this.contact)
  }

  /**
   * méthode appelée par le formulaire
   * @param f Les résultats du formulaire
   */
  soumettreFormulaire(f: { value: any; }){
    console.log('Données envoyées',f);
    console.log('Comparaison des données', f.value, this.contact)
  }
}
