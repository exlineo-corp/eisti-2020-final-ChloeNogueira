export interface Prfil {
    _id?:number | string; // id optionnel
    nom:string;
    prenom:string;
    specialites:Array<string>;
    promo:string;
    mail?:string;
    photo?:string;
   
}
