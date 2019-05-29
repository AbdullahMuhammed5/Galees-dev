import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUpUser(user){
    const header = new HttpHeaders();
    header.set('Content-Type', 'multipart/form-data');
    return this.http.post('http://localhost:8000/api/register', user, {headers: header})
  }

  signInUser(user){
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/login', user)
  }
}
