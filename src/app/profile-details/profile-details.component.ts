import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { FormModalComponent } from '../form-modal/form-modal.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
// myForm: FormGroup;
  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
  }
    openDialog() {
      const dialogRef = this.dialog.open(DialogFormComponent, {
        width: '650px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    // const dialogConfig = new MatDialogConfig();
    // this.dialog.open(DialogFormComponent, dialogConfig);
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });

}
