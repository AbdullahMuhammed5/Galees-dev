import { UsersService } from './../shared/services/users.service';
import { GetSitterDetailsService } from './../shared/services/get-sitter-details.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dialogRef: MatDialog,
    private route: Router,
    private currUser: UsersService,
    private sitterService:GetSitterDetailsService) { }

  // tslint:disable-next-line: member-ordering
  signupUser: FormGroup;
  // Array to push imgs
  // tslint:disable-next-line: member-ordering
  userId;
  ngOnInit() {
    this.signupUser = this.formBuilder.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postal: ['', [Validators.required]],
      phone: ['', [Validators.required, CustomValidators.digits]],
      addition: ['']
    });
    if(localStorage.getItem('id')){
      console.log(+(localStorage.getItem('id')))
      console.log(typeof( localStorage.getItem('id')))
    }
    
  }

  onSubmit(form) {
    form.value.sitterID = +(localStorage.getItem('sitter'));
    form.value.customerID = +(localStorage.getItem('id'));
    console.log(form.value);
    this.http.post('http://localhost:8000/orders', form.value).subscribe(res => console.log(res)
    )
    this.dialogRef.closeAll();

    console.log(this.route);
    
  }
}










