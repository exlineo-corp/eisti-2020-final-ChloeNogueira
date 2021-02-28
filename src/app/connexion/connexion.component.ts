import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ConnecteService } from '../services/connecte.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  util:any = {id:'',mdp:''}

  constructor(private authServ:AuthService) { }

  ngOnInit() {
  }

  gogo(){
    console.log(this.util);
    this.authServ.gogoId(this.util);
  }

}
