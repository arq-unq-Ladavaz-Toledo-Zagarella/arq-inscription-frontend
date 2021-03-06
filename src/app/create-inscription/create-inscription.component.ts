import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from "@angular/router";
import { environment } from "../../environments/environment"
import 'rxjs/add/operator/map'

@Component({
  selector: 'create-inscription',
  inputs: ['subjects'],
  templateUrl: './create-inscription.component.html',
  styleUrls: ['./create-inscription.component.css']
})
export class CreateInscriptionComponent {
  filter= ""
  subjects= []
  subjectsFound= []
  selectedSubjects= []

  constructor(private http: Http, private router: Router) {
    this.findSubjects()
  }

  send() {
    this.http.post(environment.apiEndpoint + '/inscriptions/create/1', this.selectedSubjects).map(res => res.json())
    .subscribe(
      result => {
        this.router.navigate(['/my-inscription', result.id])
      },
      error => { });
  }

  search() {
    if(!this.filterEntered()){
      this.setSubjectsFound([])
    }else {
      this.setSubjectsFound(this.applyFilter())
      this.setSubjectsFound(this.deletePreviouslySelectedSubjects())
    }
  }

  applyFilter() {
    return this.subjects.filter( subject => subject.name.toLowerCase( ).indexOf(this.filter.toLowerCase( )) >= 0)
  }

  deletePreviouslySelectedSubjects() {
    return this.subjectsFound.filter(item => this.selectedSubjects.indexOf(item) < 0)
  }

  selectSubject(i) {
    this.selectedSubjects.push(this.subjectsFound[i])
    this.setSubjectsFound([])
    this.deleteFilter()
  }

  unselectSubject(i) {
    this.selectedSubjects.splice(i, 1)
  }

  filterEntered() {
    return this.filter != ""
  }

  deleteFilter() {
    this.filter= ""
  }

  setSubjectsFound(anArray) {
    this.subjectsFound= anArray
  }

  getSubjectsFound() {
    return this.subjectsFound
  }

  isThereAnySubjectFound() {
    return this.subjectsFound != []
  }

  ngOnInit() {
    if(sessionStorage.getItem("id") === null)
      this.router.navigate(['/'])
  }

  findSubjects() {
    this.http.get(environment.apiEndpoint + '/subjects/list').map(res => res.json())
    .subscribe(
      result => {
        this.subjects= result
      },
      error => { });
  }
}