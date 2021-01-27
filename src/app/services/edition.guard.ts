import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnecteService } from './connecte.service';

@Injectable({
  providedIn: 'root'
})
export class EditionGuard implements CanActivate, CanLoad {

  constructor(private connecteServ:ConnecteService){}
  // Autoriser des liens routerLink
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.connecteServ.connexion;
  }
  // Autoriser le chargement en lazy loading
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.connecteServ.statut > 0;
  }
}
