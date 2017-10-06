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
  	return this.http.get(environment.apiEndpoint + '/students/login/' + 
      this.username + '/' + this.password).map(res => res.json())
        .subscribe(
          result => {
            sessionStorage.setItem("id", result)
            this.router.navigate(['create-inscription'])
          },
          error => { });
  }
}
