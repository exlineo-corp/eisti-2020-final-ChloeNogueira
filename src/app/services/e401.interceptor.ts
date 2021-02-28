import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { ConnecteService } from './connecte.service';

@Injectable()
export class E401Interceptor implements HttpInterceptor {

  constructor(private connecteServ: ConnecteService, private route: router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError(
        (erreur) => {
          if(erreur instanceof HttpErrorResponse && erreur.status == 401){
            this.connecteServ.statut=0;
            this.connecteServ.connexion = false;
            this.connecteServ.token = null;
            this.route.navigateByUrl('/connexion');
          }
          return erreur;
        }
      )
    )as any;
  }
}
