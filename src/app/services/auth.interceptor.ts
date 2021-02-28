import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ConnecteService } from './connecte.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  entetes: any;

  constructor(private connecteServ: ConnecteService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Réécriture des entêtes si un token existe
    console.log("Interception d'une requête ...");
    if (this.connecteServ.token) {
      this.entetes ={
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': 'Bearer' + this.connecteServ.token
        })
      }
    }
    else {
      this.entetes = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    }
    const authReq = request.clone(this.entetes); // Clonage de la requête initiale 

    console.log("La requête va être envoyée avec un nouveau header intégrant une autorisation...");
    //Envoyer la  nouvelle requête
    return next.handle(authReq)
    .pipe(
      catchError((erreur) => {
        console.log("Une erreur est survenue");
        console.log(erreur); //Récupère les erreurs et les affiche
        return Observable.throw(erreur); // Renvoyer l'erreur
      })
    ) as any;
  }; 
}
