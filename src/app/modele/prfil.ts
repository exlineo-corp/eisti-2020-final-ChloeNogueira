export interface PrfilI {
    _id?:number | string; // id optionnel
    nom:string;
    prenom:string;
    specialites:Array<string>;
    promo:string;
    mail?:string;
    age:number;
    photo?:string;
    statut?:number;
   
}

export class Prfil implements PrfilI{
    _id =0;
    nom="";
    prenom="";
    specialites=[];
    promo="";
    mail="";
    age=0;
    photo="";
}