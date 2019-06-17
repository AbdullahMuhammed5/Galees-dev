import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private fb: FormBuilder, private Http: HttpClient) { }
  passwordForm: FormGroup;
  emailForm: FormGroup;

  ngOnInit() {
    // Make Instant from Reactive Form
    // tslint:disable-next-line: max-line-length
    /*------------------ Password Form ------------------*/
    // tslint:disable-next-line: max-line-length
    const newPass = new FormControl('', [Validators.required, Validators.pattern(/^(?=^.{0,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]);
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: newPass,
      confirmPassword: ['', [Validators.required, CustomValidators.equalTo(newPass)]]
    });
    /*------------------ Email Form ------------------*/
    const newMail = new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z_\.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/gi)]);
    this.emailForm = this.fb.group({
      newEmail: newMail,
      confirmEmail: ['', [Validators.required, CustomValidators.equalTo(newMail)]]
    });
  }


  /* -------------------------- Password Alert --------------------------*/


  
  updatePassword(updatePassword) {

    // updatedPassword.email  = this.userService.currentUser.email;

  //   this.Http.put('backend url', updatePassword).subscribe(res => {
  //     if (res.status == 200) {
  //       Swal.fire({
  //         position: 'center',
  //         type: 'success',
  //         title: 'Your password has been changed successfully',
  //         showConfirmButton: false,
  //         timer: 1500
  //       });
  //     }
  //   });

  }


  /* -------------------------- Email Alert --------------------------*/


  updateEmail(emailForm) {

    // emailPassword.email  = this.userService.currentUser.email;
    // Swal.fire({
    //   position: 'center',
    //   type: 'success',
    //   title: 'Your email has been changed successfully',
    //   showConfirmButton: false,
    //   timer: 1500
    // });
    // this.Http.put('backendUrl', emailForm).subscribe(
    //   res => 
    //   if ( res.status == 400) {
    //   Swal.fire({
    //   position: 'center',
    //   type: 'success',
    //   title: 'Your email has been changed successfully',
    //   showConfirmButton: false,
    //   timer: 1500
    // });
    //   }
    // );
  }


  /* -------------------------- Delete Alert --------------------------*/
  deleteAccount(e) {
    e.preventDefault();

    // this.Http.delete('backendURL', this.userService.currentUser.id);

    // Swal.fire({
    //   title: 'Are you sure you want to delete your account ?',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#591AB4',
    //   cancelButtonColor: '#ECECEC',
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if (result.value) {
    //     Swal.fire(
    //       'Deleted !',
    //       'Your Account has been deleted.',
    //       'success'
    //     );
    //   }
    // });

  }
}
