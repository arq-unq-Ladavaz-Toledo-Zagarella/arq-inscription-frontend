import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = "usuariodeprueba"
  password = "usuariodeprueba"

  constructor(private http: Http, private router: Router) { }

  login() {
  console.log(environment.apiEndpoint)
  	return this.http.get(environment.apiEndpoint + '/students/login/' + 
      this.username + '/' + this.password)
        .subscribe(
          result => {
            console.log(result)
          },
          error => { },
          () => {
            this.router.navigate(['inscription'])
          });
  }
}
