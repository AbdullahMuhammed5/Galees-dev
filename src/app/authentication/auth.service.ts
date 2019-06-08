import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUpUser(user) {
    return this.http.post('http://localhost:8000/api/auth/register', user)
  }

  signUpClientUser(user) {
    return this.http.post('http://localhost:8000/api/auth/ClientRegister', user)
  }

  signInUser(user) {
    return this.http.post('http://localhost:8000/api/auth/login', user)
  }
}
