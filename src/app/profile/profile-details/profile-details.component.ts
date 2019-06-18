import { GetSitterDetailsService } from './../../shared/services/get-sitter-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  sitter;
  id;
  constructor(private profile: GetSitterDetailsService, 
    private route: ActivatedRoute,
    private userService: UsersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getProfileData(this.id).subscribe(
      res => this.sitter = res
    )
  }

}
