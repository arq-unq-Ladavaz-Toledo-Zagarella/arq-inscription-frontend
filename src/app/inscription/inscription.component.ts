import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"
import 'rxjs/add/operator/map'

@Component({
  selector: 'inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  
  subjects= [{name: "dsada"}, {name:"ddd"}]
  constructor(private http: Http, private router: Router) { 
  	this.http.get(environment.apiEndpoint + '/subjects/list').map(res => res.json())
		.subscribe(
      result => {
        console.log(result)
        this.subjects= result
        console.log(this.subjects)
      },
      error => { });
	}
}
