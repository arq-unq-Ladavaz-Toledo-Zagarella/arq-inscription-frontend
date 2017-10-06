import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../environments/environment"
import 'rxjs/add/operator/map'

@Component({
  selector: 'my-inscription',
  inputs: ['myInscription'],
  templateUrl: './my-inscription.component.html',
  styleUrls: ['./my-inscription.component.css']
})

export class MyInscriptionComponent {
	id= null
	inscription= {}

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { 	}

  ngOnInit() {
    if(sessionStorage.getItem("id") === null)
      this.router.navigate(['/'])
    this.route.params.subscribe(params => {
       this.id = +params['id'];
       this.findMyInscription()
    });
  }

  findMyInscription() {
    this.http.get(environment.apiEndpoint + `/inscriptions/${this.id}`).map(res => res.json())
    .subscribe(
      result => {
        this.inscription= result
      },
      error => { });
  }
}