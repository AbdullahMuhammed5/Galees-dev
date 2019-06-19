import { GetSitterDetailsService } from './../../shared/services/get-sitter-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { OrderComponent } from '../../order/order.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2'


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
    private userService: UsersService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getProfileData(this.id).subscribe(
      res => this.sitter = res
    );
  }

  openDialog() {
    if(localStorage.getItem('login')) {
    const dialogRef = this.dialog.open(OrderComponent, {
      width: '650px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  else {
    Swal.fire({
      title: 'Please Login to proceed',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login',
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('login');
      }
    })
  }
  }

}
