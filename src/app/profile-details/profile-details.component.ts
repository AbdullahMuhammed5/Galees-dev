import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  constructor( ) { }

  ngOnInit() {
  }
  async proposal() {
  const {value: email} = await Swal.fire({
    title: 'Input email address',
    inputPlaceholder: 'Enter your email address'
  });
  if (email) {
    Swal.fire('Entered email: ' + email);
  }

}

}
