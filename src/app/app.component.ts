import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Galees, Matching Web Application';
  user: User;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get<User>(environment.serverUrl+"auth").subscribe(
      (data) => {
        this.user = data;
      }
    )
  }
}
