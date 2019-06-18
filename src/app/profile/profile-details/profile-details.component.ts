import { GetSitterDetailsService } from './../../shared/services/get-sitter-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  sitter;
  id;
  constructor(private profile: GetSitterDetailsService) {

    // this.profile.profileSitterObs.subscribe(sitter => {
    //   console.log(sitter);
    // })
  }

  ngOnInit() {
    // console.log(this.sitter);
    // console.log = this.profile.profileSitter);
    this.sitter = this.profile.profileSitter;
    this.id = this.profile.sitterID;
    console.log(this.sitter);
  }

}
