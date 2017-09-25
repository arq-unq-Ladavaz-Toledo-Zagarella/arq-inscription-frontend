import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = ""
  password = ""

  constructor(private http: Http, private router: Router) { }

  login() {
  	return this.http.get('http://localhost:8080/arq-inscription-backend/rest/students/login/' + 
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
