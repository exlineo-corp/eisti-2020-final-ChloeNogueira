import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any;

  constructor() { }

  ngOnInit() {
    this.contact = {
      nom: '',
      email: '',
      sujet: '',
      message: '',
    };
  }

  suiviInput() {
    console.log(this.contact);
  }

 
  onSubmit() { 
    console.log(this.contact.nom); 
  }
}
